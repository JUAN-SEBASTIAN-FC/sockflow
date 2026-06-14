/**
 * Convierte una cadena CSS en línea ("color:red;font-size:12px") en el objeto
 * de estilos que espera React. Permite reutilizar tal cual los estilos del
 * diseño original sin reescribirlos a mano.
 *
 * @param {string} str cadena de estilos CSS.
 * @returns {Object} objeto de estilos para la prop `style` de React.
 */
export default function css(str) {
  const style = {};
  if (!str) return style;

  for (const decl of str.split(';')) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;

    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop) continue;

    // Las custom properties (--var) se conservan tal cual; el resto se pasa
    // a camelCase para que React las acepte.
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

    style[key] = value;
  }

  return style;
}
