-- ══════════════════════════════════════════════════════
-- MIGRACIÓN: fix_constraints
-- Elimina constraints obsoletos que bloquean categorías
-- personalizadas. Ejecutar si la tabla products ya existía
-- antes de agregar el sistema de categorías dinámicas.
-- ══════════════════════════════════════════════════════

-- Eliminar CHECK CONSTRAINT que limitaba 'cat' a valores fijos
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_cat_check;

-- Eliminar CHECK CONSTRAINT que limitaba 'status' a valores fijos
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_status_check;

-- Asegurar que image_url es TEXT sin límite (necesario para base64)
ALTER TABLE public.products ALTER COLUMN image_url TYPE text;
