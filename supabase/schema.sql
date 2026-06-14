-- ──────────────────────────────────────────────────────
-- Medias Tuluá · Schema
-- Ejecutar en: Supabase → SQL Editor → New query
-- ──────────────────────────────────────────────────────

-- ── 1. Tabla de categorías ────────────────────────────
CREATE TABLE IF NOT EXISTS public.categories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL UNIQUE,
  bg_color    text NOT NULL DEFAULT 'rgba(37,99,235,.10)',
  text_color  text NOT NULL DEFAULT '#2563EB',
  created_at  timestamptz DEFAULT now()
);

-- ── 2. Tabla de productos ─────────────────────────────
CREATE TABLE IF NOT EXISTS public.products (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text        NOT NULL,
  cat         text        NOT NULL DEFAULT '',
  slug        text        NOT NULL DEFAULT '',
  desc        text        NOT NULL DEFAULT '',
  price       text        NOT NULL DEFAULT '',
  units       integer     NOT NULL DEFAULT 0,
  status      text        NOT NULL DEFAULT 'Disponible',
  colors      text        NOT NULL DEFAULT '#1E293B,#2563EB,#94A3B8',
  filter      text        NOT NULL DEFAULT 'none',
  scolor      text,
  sbg         text,
  catbg       text,
  catcolor    text,
  image_url   text,          -- base64 data-URL o URL pública
  created_at  timestamptz DEFAULT now()
);

-- ── 3. Habilitar RLS ──────────────────────────────────
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products   ENABLE ROW LEVEL SECURITY;

-- ── 4. Políticas: categories ──────────────────────────
-- Cualquiera puede leer
CREATE POLICY "categories_select_public"
  ON public.categories FOR SELECT
  USING (true);

-- Solo usuarios autenticados pueden crear/editar/borrar
CREATE POLICY "categories_insert_auth"
  ON public.categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "categories_delete_auth"
  ON public.categories FOR DELETE
  TO authenticated
  USING (true);

-- ── 5. Políticas: products ────────────────────────────
CREATE POLICY "products_select_public"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "products_insert_auth"
  ON public.products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "products_update_auth"
  ON public.products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "products_delete_auth"
  ON public.products FOR DELETE
  TO authenticated
  USING (true);
