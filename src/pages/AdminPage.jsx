import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';
import ImageLightbox from '../components/ImageLightbox';
import './AdminPage.css';

const DISPS = ['Disponible', 'Pocas unidades', 'Agotado'];

// Paleta default para nueva categoría
const CAT_PALETTES = [
  { bg_color: 'rgba(37,99,235,.10)',   text_color: '#2563EB' },
  { bg_color: 'rgba(124,58,237,.12)', text_color: '#6D28D9' },
  { bg_color: 'rgba(16,185,129,.10)', text_color: '#059669' },
  { bg_color: 'rgba(245,158,11,.12)', text_color: '#B45309' },
  { bg_color: 'rgba(239,68,68,.10)',  text_color: '#DC2626' },
  { bg_color: 'rgba(30,58,138,.10)',  text_color: '#1E3A8A' },
];

const EMPTY_FORM = {
  name: '', cat: '', desc: '', price: '',
  units: '0', status: 'Disponible',
  colors: '#1E293B,#2563EB,#94A3B8', filter: 'none',
};

export default function AdminPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const {
    products, categories, loading, error: loadErr,
    addProduct, updateProduct, deleteProduct,
    addCategory, deleteCategory,
  } = useProducts();

  // ── Productos state ──
  const [tab,          setTab]          = useState('products'); // 'products' | 'categories'
  const [search,       setSearch]       = useState('');
  const [filterCat,    setFilterCat]    = useState('Todas');
  const [modal,        setModal]        = useState(null);
  const [form,         setForm]         = useState(EMPTY_FORM);
  const [imageFile,    setImageFile]    = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [editId,       setEditId]       = useState(null);
  const [saving,       setSaving]       = useState(false);
  const [formError,    setFormError]    = useState('');
  const [lightbox,     setLightbox]     = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting,     setDeleting]     = useState(false);

  // ── Categorías state ──
  const [catModal,     setCatModal]     = useState(false);
  const [catName,      setCatName]      = useState('');
  const [catPalIdx,    setCatPalIdx]    = useState(0);
  const [catSaving,    setCatSaving]    = useState(false);
  const [catError,     setCatError]     = useState('');
  const [catDeleteConfirm, setCatDeleteConfirm] = useState(null);
  const [catDeleting,  setCatDeleting]  = useState(false);

  const TIPOS = useMemo(() => categories.map((c) => c.name), [categories]);

  const filtered = products.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterCat !== 'Todas' && p.cat !== filterCat) return false;
    return true;
  });

  // ── Producto handlers ──
  const defaultCat = TIPOS[0] || '';

  const openCreate = () => {
    setForm({ ...EMPTY_FORM, cat: defaultCat });
    setEditId(null);
    setImageFile(null); setImagePreview(''); setFormError('');
    setModal('create');
  };

  const openEdit = (p) => {
    setForm({
      name: p.name, cat: p.cat, desc: p.desc, price: p.price,
      units: String(p.units), status: p.status, colors: p.colors, filter: p.filter,
    });
    setImageFile(null);
    setImagePreview(p.image_url || '');
    setEditId(p.id); setFormError('');
    setModal('edit');
  };

  const handleImagePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setFormError('La imagen no puede superar 2 MB.'); return; }
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      setFormError('Solo se aceptan PNG, JPG o WebP.'); return;
    }
    setFormError('');
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { setFormError('El nombre es obligatorio.'); return; }
    if (!form.price.trim()) { setFormError('El precio es obligatorio.'); return; }
    if (!form.cat) { setFormError('Selecciona una categoría.'); return; }
    setSaving(true); setFormError('');
    const fn = modal === 'create' ? addProduct : (f, img) => updateProduct(editId, f, img);
    const result = await fn(form, imageFile);
    setSaving(false);
    if (result?.error) { setFormError(result.error); return; }
    setModal(null);
  };

  const handleDelete = async () => {
    setDeleting(true);
    await deleteProduct(deleteConfirm);
    setDeleting(false);
    setDeleteConfirm(null);
  };

  // ── Categoría handlers ──
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!catName.trim()) { setCatError('El nombre es obligatorio.'); return; }
    setCatSaving(true); setCatError('');
    const pal = CAT_PALETTES[catPalIdx];
    const result = await addCategory({ name: catName.trim(), bg_color: pal.bg_color, text_color: pal.text_color });
    setCatSaving(false);
    if (result?.error) { setCatError(result.error); return; }
    setCatName(''); setCatModal(false);
  };

  const handleDeleteCategory = async () => {
    setCatDeleting(true);
    await deleteCategory(catDeleteConfirm);
    setCatDeleting(false);
    setCatDeleteConfirm(null);
  };

  const handleLogout = async () => { await logout(); navigate('/'); };
  const field = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="admin">
      {/* ── Topbar ── */}
      <header className="admin__topbar">
        <div className="admin__brand">
          <div className="admin__brand-logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="admin__brand-name">Medias Tuluá · Admin</span>
        </div>
        <div className="admin__topbar-right">
          <span className="admin__user">{user?.email}</span>
          <button className="admin__logout" onClick={handleLogout}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Salir
          </button>
        </div>
      </header>

      <div className="admin__body">
        {/* ── Stats ── */}
        <div className="admin__stats">
          {[
            { label: 'Total',         value: products.length },
            { label: 'Disponibles',   value: products.filter((p) => p.status === 'Disponible').length },
            { label: 'Stock bajo',    value: products.filter((p) => p.status === 'Pocas unidades').length },
            { label: 'Agotados',      value: products.filter((p) => p.status === 'Agotado').length },
            { label: 'Categorías',    value: categories.length },
          ].map((s) => (
            <div key={s.label} className="admin__stat">
              <span className="admin__stat-val">{s.value}</span>
              <span className="admin__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="admin__tabs">
          <button
            className={`admin__tab${tab === 'products' ? ' is-active' : ''}`}
            onClick={() => setTab('products')}
          >Productos</button>
          <button
            className={`admin__tab${tab === 'categories' ? ' is-active' : ''}`}
            onClick={() => setTab('categories')}
          >Categorías</button>
        </div>

        {/* ══════════════ TAB: PRODUCTOS ══════════════ */}
        {tab === 'products' && (
          <>
            <div className="admin__controls">
              <div className="admin__controls-left">
                <div className="admin__search-wrap">
                  <svg className="admin__search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                  <input className="admin__search" type="text" placeholder="Buscar media…"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="admin__cat-tabs">
                  {['Todas', ...TIPOS].map((c) => (
                    <button key={c} className={`admin__cat-tab${filterCat === c ? ' is-active' : ''}`}
                      onClick={() => setFilterCat(c)}>{c}</button>
                  ))}
                </div>
              </div>
              <button className="admin__create-btn" onClick={openCreate}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Nueva media
              </button>
            </div>

            {loading ? (
              <div className="admin__loading">
                <div className="admin__spinner" />
                <p>Cargando productos…</p>
              </div>
            ) : loadErr ? (
              <div className="admin__error-msg">Error al cargar: {loadErr}</div>
            ) : filtered.length === 0 ? (
              <div className="admin__empty">
                {TIPOS.length === 0
                  ? <p>Crea una categoría primero antes de agregar productos.</p>
                  : <p>No hay productos que coincidan.</p>}
              </div>
            ) : (
              <div className="admin__grid">
                {filtered.map((p) => (
                  <div key={p.id} className="aprod">
                    <div className="aprod__media" onClick={() => setLightbox(p)}>
                      <span className="aprod__cat" style={{ background: p.catbg, color: p.catcolor }}>{p.cat}</span>
                      <span className="aprod__status" style={{ background: p.sbg, color: p.scolor }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.scolor, display: 'inline-block', marginRight: 4, flexShrink: 0 }} />
                        {p.status}
                      </span>
                      <img className="aprod__img" src={p.image_url || 'assets/sock.png'} alt={p.name}
                        style={p.filter && p.filter !== 'none' ? { filter: p.filter } : undefined} />
                    </div>
                    <div className="aprod__body">
                      <div className="aprod__row">
                        <span className="aprod__name">{p.name}</span>
                        <span className="aprod__price">{p.price}</span>
                      </div>
                      <p className="aprod__desc">{p.desc}</p>
                      <div className="aprod__foot">
                        <span className="aprod__units"><b>{p.units}</b> uds.</span>
                        <div className="aprod__actions">
                          <button className="aprod__btn aprod__btn--edit" onClick={() => openEdit(p)}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" />
                            </svg>
                            Editar
                          </button>
                          <button className="aprod__btn aprod__btn--del" onClick={() => setDeleteConfirm(p.id)}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                              <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ══════════════ TAB: CATEGORÍAS ══════════════ */}
        {tab === 'categories' && (
          <>
            <div className="admin__controls">
              <div className="admin__controls-left" />
              <button className="admin__create-btn" onClick={() => { setCatName(''); setCatError(''); setCatModal(true); }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Nueva categoría
              </button>
            </div>

            {categories.length === 0 ? (
              <div className="admin__empty"><p>No hay categorías todavía. Crea la primera para poder agregar productos.</p></div>
            ) : (
              <div className="admin__cats-list">
                {categories.map((c) => (
                  <div key={c.id} className="acat">
                    <span className="acat__badge" style={{ background: c.bg_color, color: c.text_color }}>
                      {c.name}
                    </span>
                    <span className="acat__count">
                      {products.filter((p) => p.cat === c.name).length} producto{products.filter((p) => p.cat === c.name).length !== 1 ? 's' : ''}
                    </span>
                    <button className="aprod__btn aprod__btn--del acat__del" onClick={() => setCatDeleteConfirm(c.id)}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Modal crear / editar producto ── */}
      {modal && (
        <div className="amodal" onClick={(e) => e.target === e.currentTarget && !saving && setModal(null)}>
          <div className="amodal__card">
            <div className="amodal__head">
              <h2 className="amodal__title">{modal === 'create' ? 'Nueva media' : 'Editar media'}</h2>
              <button className="amodal__close" onClick={() => !saving && setModal(null)} disabled={saving}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="amodal__form" onSubmit={handleSubmit} noValidate>
              <div className="amodal__row">
                <div className="afield">
                  <label className="afield__label">Nombre *</label>
                  <input className="afield__input" value={form.name}
                    onChange={(e) => field('name', e.target.value)}
                    placeholder="Ej: Pro Runner 3.0" disabled={saving} />
                </div>
                <div className="afield">
                  <label className="afield__label">Precio *</label>
                  <input className="afield__input" value={form.price}
                    onChange={(e) => field('price', e.target.value)}
                    placeholder="$24.900" disabled={saving} />
                </div>
              </div>

              <div className="amodal__row">
                <div className="afield">
                  <label className="afield__label">Categoría *</label>
                  {TIPOS.length === 0 ? (
                    <p className="afield__hint">Crea una categoría primero desde la pestaña "Categorías".</p>
                  ) : (
                    <select className="afield__input" value={form.cat}
                      onChange={(e) => field('cat', e.target.value)} disabled={saving}>
                      {TIPOS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  )}
                </div>
                <div className="afield">
                  <label className="afield__label">Disponibilidad</label>
                  <select className="afield__input" value={form.status}
                    onChange={(e) => field('status', e.target.value)} disabled={saving}>
                    {DISPS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="afield">
                <label className="afield__label">Descripción</label>
                <input className="afield__input" value={form.desc}
                  onChange={(e) => field('desc', e.target.value)}
                  placeholder="Breve descripción del producto" disabled={saving} />
              </div>

              <div className="afield">
                <label className="afield__label">Unidades en stock</label>
                <input className="afield__input" type="number" min="0" value={form.units}
                  onChange={(e) => field('units', e.target.value)} disabled={saving} />
              </div>

              <div className="afield">
                <label className="afield__label">Imagen del producto</label>
                <label className="afield__upload" style={{ cursor: saving ? 'not-allowed' : 'pointer' }}>
                  <input type="file" accept="image/png,image/jpeg,image/webp"
                    style={{ display: 'none' }} onChange={handleImagePick} disabled={saving} />
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="afield__preview" />
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span>Click para subir imagen</span>
                      <span className="afield__upload-hint">PNG, JPG, WebP · máx 2 MB</span>
                    </>
                  )}
                </label>
                {imagePreview && (
                  <button type="button" className="afield__remove-img"
                    onClick={() => { setImageFile(null); setImagePreview(''); }}>
                    Quitar imagen
                  </button>
                )}
              </div>

              {formError && <p className="amodal__error" role="alert">{formError}</p>}

              <div className="amodal__footer">
                <button type="button" className="amodal__cancel"
                  onClick={() => setModal(null)} disabled={saving}>Cancelar</button>
                <button type="submit" className="amodal__submit" disabled={saving || TIPOS.length === 0}>
                  {saving ? 'Guardando…' : modal === 'create' ? 'Crear media' : 'Guardar cambios'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Modal nueva categoría ── */}
      {catModal && (
        <div className="amodal" onClick={(e) => e.target === e.currentTarget && !catSaving && setCatModal(false)}>
          <div className="amodal__card amodal__card--sm">
            <div className="amodal__head">
              <h2 className="amodal__title">Nueva categoría</h2>
              <button className="amodal__close" onClick={() => setCatModal(false)} disabled={catSaving}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="amodal__form" onSubmit={handleAddCategory} noValidate>
              <div className="afield">
                <label className="afield__label">Nombre *</label>
                <input className="afield__input" value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="Ej: Deportiva, Casual…" disabled={catSaving} autoFocus />
              </div>

              <div className="afield">
                <label className="afield__label">Color</label>
                <div className="acat__palette">
                  {CAT_PALETTES.map((pal, i) => (
                    <button
                      key={i} type="button"
                      className={`acat__pal-btn${catPalIdx === i ? ' is-active' : ''}`}
                      style={{ background: pal.bg_color, color: pal.text_color, border: `2px solid ${catPalIdx === i ? pal.text_color : 'transparent'}` }}
                      onClick={() => setCatPalIdx(i)}
                    >
                      {catName || 'Ejemplo'}
                    </button>
                  ))}
                </div>
              </div>

              {catError && <p className="amodal__error" role="alert">{catError}</p>}

              <div className="amodal__footer">
                <button type="button" className="amodal__cancel" onClick={() => setCatModal(false)} disabled={catSaving}>Cancelar</button>
                <button type="submit" className="amodal__submit" disabled={catSaving}>
                  {catSaving ? 'Guardando…' : 'Crear categoría'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Confirmar eliminar producto ── */}
      {deleteConfirm !== null && (
        <div className="amodal" onClick={(e) => e.target === e.currentTarget && !deleting && setDeleteConfirm(null)}>
          <div className="amodal__card amodal__card--sm">
            <h2 className="amodal__title">¿Eliminar producto?</h2>
            <p className="amodal__del-text">Esta acción no se puede deshacer.</p>
            <div className="amodal__footer">
              <button className="amodal__cancel" onClick={() => setDeleteConfirm(null)} disabled={deleting}>Cancelar</button>
              <button className="amodal__submit amodal__submit--danger" onClick={handleDelete} disabled={deleting}>
                {deleting ? 'Eliminando…' : 'Sí, eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirmar eliminar categoría ── */}
      {catDeleteConfirm !== null && (
        <div className="amodal" onClick={(e) => e.target === e.currentTarget && !catDeleting && setCatDeleteConfirm(null)}>
          <div className="amodal__card amodal__card--sm">
            <h2 className="amodal__title">¿Eliminar categoría?</h2>
            <p className="amodal__del-text">Los productos de esta categoría quedarán sin categoría. Esta acción no se puede deshacer.</p>
            <div className="amodal__footer">
              <button className="amodal__cancel" onClick={() => setCatDeleteConfirm(null)} disabled={catDeleting}>Cancelar</button>
              <button className="amodal__submit amodal__submit--danger" onClick={handleDeleteCategory} disabled={catDeleting}>
                {catDeleting ? 'Eliminando…' : 'Sí, eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {lightbox && <ImageLightbox product={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
