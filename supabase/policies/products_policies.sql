-- ══════════════════════════════════════════════════════
-- POLÍTICAS RLS: products
-- Row Level Security para la tabla de productos
-- ══════════════════════════════════════════════════════

-- Habilitar RLS en la tabla
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- ── SELECT: cualquier visitante puede leer el catálogo ──
CREATE POLICY "products_select_public"
  ON public.products
  FOR SELECT
  USING (true);

-- ── INSERT: solo el admin autenticado puede crear productos ──
CREATE POLICY "products_insert_auth"
  ON public.products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ── UPDATE: solo el admin autenticado puede editar productos ──
CREATE POLICY "products_update_auth"
  ON public.products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ── DELETE: solo el admin autenticado puede eliminar productos ──
CREATE POLICY "products_delete_auth"
  ON public.products
  FOR DELETE
  TO authenticated
  USING (true);
