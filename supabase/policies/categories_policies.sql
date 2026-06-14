-- ══════════════════════════════════════════════════════
-- POLÍTICAS RLS: categories
-- Row Level Security para la tabla de categorías
-- ══════════════════════════════════════════════════════

-- Habilitar RLS en la tabla
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- ── SELECT: cualquier visitante puede leer las categorías ──
CREATE POLICY "categories_select_public"
  ON public.categories
  FOR SELECT
  USING (true);

-- ── INSERT: solo el admin autenticado puede crear categorías ──
CREATE POLICY "categories_insert_auth"
  ON public.categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ── DELETE: solo el admin autenticado puede eliminar categorías ──
CREATE POLICY "categories_delete_auth"
  ON public.categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Nota: no hay UPDATE porque las categorías no se editan, solo se crean/eliminan.
