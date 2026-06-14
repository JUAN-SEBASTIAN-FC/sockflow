-- ══════════════════════════════════════════════════════
-- Medias Tuluá · Schema completo
-- Ejecutar en: Supabase → SQL Editor → New query
--
-- Este archivo es el punto de entrada que une todo.
-- Los archivos individuales están en:
--   migrations/fix_constraints.sql  → corrige tabla existente
--   tables/categories.sql           → tabla de categorías
--   tables/products.sql             → tabla de productos
--   policies/categories_policies.sql → RLS de categorías
--   policies/products_policies.sql  → RLS de productos
-- ══════════════════════════════════════════════════════


-- ── PASO 1: Corregir tabla existente (si ya fue creada antes) ──
-- Eliminar constraints obsoletos que bloquean categorías personalizadas
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_cat_check;
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_status_check;
ALTER TABLE public.products ALTER COLUMN image_url TYPE text;


-- ── PASO 2: Crear tablas ───────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.categories (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text        NOT NULL UNIQUE,
  bg_color    text        NOT NULL DEFAULT 'rgba(37,99,235,.10)',
  text_color  text        NOT NULL DEFAULT '#2563EB',
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.products (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
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
  image_url   text,
  created_at  timestamptz NOT NULL DEFAULT now()
);


-- ── PASO 3: Habilitar RLS ─────────────────────────────────────

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products   ENABLE ROW LEVEL SECURITY;


-- ── PASO 4: Políticas de categories ──────────────────────────

CREATE POLICY "categories_select_public"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "categories_insert_auth"
  ON public.categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "categories_delete_auth"
  ON public.categories FOR DELETE
  TO authenticated
  USING (true);


-- ── PASO 5: Políticas de products ────────────────────────────

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
