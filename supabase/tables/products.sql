-- ══════════════════════════════════════════════════════
-- TABLA: products
-- Productos del catálogo de Medias Tuluá
-- ══════════════════════════════════════════════════════

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

-- Columnas:
--   id         → identificador único (UUID autogenerado)
--   name       → nombre del producto
--   cat        → categoría (debe existir en tabla categories)
--   slug       → slug URL de la categoría (ej: "deportiva")
--   desc       → descripción corta del producto
--   price      → precio como texto (ej: "$24.900")
--   units      → unidades en stock
--   status     → 'Disponible' | 'Pocas unidades' | 'Agotado'
--   colors     → colores del producto separados por coma (hex)
--   filter     → filtro CSS opcional (ej: "hue-rotate(12deg)")
--   scolor     → color del badge de estado (hex) — derivado de status
--   sbg        → fondo del badge de estado (rgba) — derivado de status
--   catbg      → fondo del badge de categoría (rgba) — derivado de cat
--   catcolor   → texto del badge de categoría (hex) — derivado de cat
--   image_url  → base64 data-URL de la imagen del producto
--   created_at → fecha de creación (automática)
