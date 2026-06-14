// Catálogo de productos — datos de la galería de medias.
// Portado tal cual desde el diseño original.

const products = [
  { name: 'Pro Runner 2.0', cat: 'Deportiva', slug: 'deportiva', desc: 'Compresión y secado rápido', price: '$24.900', units: '1,240', status: 'Disponible', scolor: '#059669', sbg: 'rgba(16,185,129,.10)', sdot: '#10B981', catbg: 'rgba(37,99,235,.10)', catcolor: '#2563EB', colors: '#1E293B,#2563EB,#94A3B8', filter: 'none' },
  { name: 'Urban Classic', cat: 'Casual', slug: 'casual', desc: 'Algodón peinado premium', price: '$18.900', units: '64', status: 'Pocas unidades', scolor: '#B45309', sbg: 'rgba(245,158,11,.12)', sdot: '#F59E0B', catbg: 'rgba(96,165,250,.16)', catcolor: '#1558C0', colors: '#1E293B,#DCE9F7,#60A5FA', filter: 'hue-rotate(-12deg) saturate(1.05)' },
  { name: 'Executive Fit', cat: 'Ejecutiva', slug: 'ejecutiva', desc: 'Microfibra ultrafina', price: '$22.900', units: '980', status: 'Disponible', scolor: '#059669', sbg: 'rgba(16,185,129,.10)', sdot: '#10B981', catbg: 'rgba(30,58,138,.10)', catcolor: '#1E3A8A', colors: '#1E3A8A,#334155,#64748B', filter: 'saturate(.82) brightness(.98)' },
  { name: 'Thermo Peak', cat: 'Térmica', slug: 'termica', desc: 'Lana merino térmica', price: '$29.900', units: '0', status: 'Agotado', scolor: '#DC2626', sbg: 'rgba(239,68,68,.10)', sdot: '#EF4444', catbg: 'rgba(124,58,237,.12)', catcolor: '#6D28D9', colors: '#1E293B,#7C3AED,#A5A3F5', filter: 'hue-rotate(16deg) saturate(1.1)' },
  { name: 'Court Master', cat: 'Deportiva', slug: 'deportiva', desc: 'Amortiguación reforzada', price: '$26.900', units: '512', status: 'Disponible', scolor: '#059669', sbg: 'rgba(16,185,129,.10)', sdot: '#10B981', catbg: 'rgba(37,99,235,.10)', catcolor: '#2563EB', colors: '#2563EB,#1E293B,#7DD3FC', filter: 'none' },
  { name: 'Daily Soft', cat: 'Casual', slug: 'casual', desc: 'Tacto suave todo el día', price: '$16.900', units: '1,820', status: 'Disponible', scolor: '#059669', sbg: 'rgba(16,185,129,.10)', sdot: '#10B981', catbg: 'rgba(96,165,250,.16)', catcolor: '#1558C0', colors: '#DCE9F7,#60A5FA,#1E293B', filter: 'hue-rotate(-12deg) saturate(1.05)' },
  { name: 'Merino Boss', cat: 'Ejecutiva', slug: 'ejecutiva', desc: 'Elegancia y durabilidad', price: '$27.900', units: '38', status: 'Pocas unidades', scolor: '#B45309', sbg: 'rgba(245,158,11,.12)', sdot: '#F59E0B', catbg: 'rgba(30,58,138,.10)', catcolor: '#1E3A8A', colors: '#1E3A8A,#475569,#94A3B8', filter: 'saturate(.82) brightness(.98)' },
  { name: 'Alpine Warm', cat: 'Térmica', slug: 'termica', desc: 'Aislamiento extremo', price: '$31.900', units: '760', status: 'Disponible', scolor: '#059669', sbg: 'rgba(16,185,129,.10)', sdot: '#10B981', catbg: 'rgba(124,58,237,.12)', catcolor: '#6D28D9', colors: '#5B21B6,#2563EB,#A5A3F5', filter: 'hue-rotate(16deg) saturate(1.1)' },
];

// delay escalonado de aparición, igual que en el diseño original (i % 4) * 80
products.forEach((p, i) => { p.delay = (i % 4) * 80; });

export default products;
