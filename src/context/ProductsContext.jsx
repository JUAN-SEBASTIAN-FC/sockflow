import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const ProductsContext = createContext(null);

// Colores de categoría — se recalculan en cliente a partir del nombre
const CAT_PALETTE = [
  { catbg: 'rgba(37,99,235,.10)',   catcolor: '#2563EB' },
  { catbg: 'rgba(96,165,250,.16)',  catcolor: '#1558C0' },
  { catbg: 'rgba(30,58,138,.10)',   catcolor: '#1E3A8A' },
  { catbg: 'rgba(124,58,237,.12)', catcolor: '#6D28D9' },
  { catbg: 'rgba(16,185,129,.10)', catcolor: '#059669' },
  { catbg: 'rgba(245,158,11,.12)', catcolor: '#B45309' },
];

const STATUS_STYLES = {
  'Disponible':     { scolor: '#059669', sbg: 'rgba(16,185,129,.10)' },
  'Pocas unidades': { scolor: '#B45309', sbg: 'rgba(245,158,11,.12)' },
  'Agotado':        { scolor: '#DC2626', sbg: 'rgba(239,68,68,.10)'  },
};

// Genera un índice de paleta estable a partir del nombre de categoría
function catIndex(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % CAT_PALETTE.length;
}

function applyStyles(p, categoriesMap = {}) {
  const palette = categoriesMap[p.cat] || CAT_PALETTE[catIndex(p.cat)];
  return {
    ...p,
    ...(palette || {}),
    ...(STATUS_STYLES[p.status] || {}),
    units: String(p.units ?? 0),
    delay: 0,
  };
}

// Convierte un File a data-URL base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function ProductsProvider({ children }) {
  const [products,   setProducts]   = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState(null);

  const fetchCategories = useCallback(async () => {
    const { data, error: err } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });
    if (!err && data) setCategories(data);
    return data || [];
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    // Cargar categorías y productos en paralelo
    const [catsResult, prodsResult] = await Promise.all([
      supabase.from('categories').select('*').order('name', { ascending: true }),
      supabase.from('products').select('*').order('created_at', { ascending: false }),
    ]);
    if (prodsResult.error) { setError(prodsResult.error.message); setLoading(false); return; }
    const cats = catsResult.data || [];
    if (!catsResult.error) setCategories(cats);
    // Mapa nombre → paleta
    const catsMap = {};
    cats.forEach((c, i) => {
      catsMap[c.name] = { catbg: c.bg_color, catcolor: c.text_color };
    });
    setProducts((prodsResult.data || []).map((p) => applyStyles(p, catsMap)));
    setLoading(false);
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  // ── Categorías CRUD ─────────────────────────────────────────
  const addCategory = async ({ name, bg_color, text_color }) => {
    if (!name?.trim()) return { error: 'El nombre es obligatorio.' };
    const { data, error: err } = await supabase
      .from('categories')
      .insert({ name: name.trim(), bg_color, text_color })
      .select().single();
    if (err) return { error: err.message };
    setCategories((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
    return { data };
  };

  const deleteCategory = async (id) => {
    const { error: err } = await supabase.from('categories').delete().eq('id', id);
    if (err) return { error: err.message };
    setCategories((prev) => prev.filter((c) => c.id !== id));
    return {};
  };

  // ── Productos CRUD ──────────────────────────────────────────
  const addProduct = async (form, imageFile) => {
    let image_url = null;
    if (imageFile) {
      image_url = await fileToBase64(imageFile);
    }

    const catsMap = {};
    categories.forEach((c) => { catsMap[c.name] = { catbg: c.bg_color, catcolor: c.text_color }; });
    const palette = catsMap[form.cat] || CAT_PALETTE[catIndex(form.cat)];
    const statusSt = STATUS_STYLES[form.status] || {};

    const row = {
      name:     form.name.trim(),
      cat:      form.cat,
      slug:     form.cat.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-'),
      desc:     form.desc.trim(),
      price:    form.price.trim(),
      units:    parseInt(form.units, 10) || 0,
      status:   form.status,
      colors:   form.colors || '#1E293B,#2563EB,#94A3B8',
      filter:   form.filter || 'none',
      scolor:   statusSt.scolor,
      sbg:      statusSt.sbg,
      catbg:    palette?.catbg,
      catcolor: palette?.catcolor,
      image_url,
    };

    const { data, error: err } = await supabase
      .from('products').insert(row).select().single();
    if (err) return { error: err.message };
    setProducts((prev) => [applyStyles(data, catsMap), ...prev]);
    return { data };
  };

  const updateProduct = async (id, form, imageFile) => {
    let image_url = undefined;
    if (imageFile) {
      image_url = await fileToBase64(imageFile);
    }

    const catsMap = {};
    categories.forEach((c) => { catsMap[c.name] = { catbg: c.bg_color, catcolor: c.text_color }; });
    const palette = catsMap[form.cat] || CAT_PALETTE[catIndex(form.cat)];
    const statusSt = STATUS_STYLES[form.status] || {};

    const row = {
      name:     form.name.trim(),
      cat:      form.cat,
      slug:     form.cat.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-'),
      desc:     form.desc.trim(),
      price:    form.price.trim(),
      units:    parseInt(form.units, 10) || 0,
      status:   form.status,
      colors:   form.colors || '#1E293B,#2563EB,#94A3B8',
      filter:   form.filter || 'none',
      scolor:   statusSt.scolor,
      sbg:      statusSt.sbg,
      catbg:    palette?.catbg,
      catcolor: palette?.catcolor,
      ...(image_url !== undefined && { image_url }),
    };

    const { data, error: err } = await supabase
      .from('products').update(row).eq('id', id).select().single();
    if (err) return { error: err.message };
    setProducts((prev) => prev.map((p) => p.id === id ? applyStyles(data, catsMap) : p));
    return { data };
  };

  const deleteProduct = async (id) => {
    const { error: err } = await supabase.from('products').delete().eq('id', id);
    if (err) return { error: err.message };
    setProducts((prev) => prev.filter((p) => p.id !== id));
    return {};
  };

  return (
    <ProductsContext.Provider value={{
      products, categories, loading, error,
      addProduct, updateProduct, deleteProduct,
      addCategory, deleteCategory,
      refetch: fetchProducts,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
