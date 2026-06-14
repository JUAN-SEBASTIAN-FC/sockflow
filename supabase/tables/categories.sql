-- ══════════════════════════════════════════════════════
-- TABLA: categories
-- Categorías de productos (dinámicas, creadas desde Admin)
-- ══════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.categories (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text        NOT NULL UNIQUE,
  bg_color    text        NOT NULL DEFAULT 'rgba(37,99,235,.10)',
  text_color  text        NOT NULL DEFAULT '#2563EB',
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Columnas:
--   id         → identificador único (UUID autogenerado)
--   name       → nombre de la categoría (único, ej: "Deportiva")
--   bg_color   → color de fondo del badge en la UI (rgba o hex)
--   text_color → color del texto del badge en la UI (hex)
--   created_at → fecha de creación (automática)
