import {
	type RouteConfigEntry,
	index,
	route,
} from '@react-router/dev/routes';

// Gunakan import.meta.glob untuk mendapatkan semua file page.jsx secara otomatis
// Eager: true agar langsung tersedia tanpa await tambahan saat booting
const pages = import.meta.glob('./**/page.jsx', { eager: true });

function generateRoutesFromGlob(): RouteConfigEntry[] {
	const routes: RouteConfigEntry[] = [];
	
	// Ambil semua path file, contoh: "./dashboard/page.jsx" atau "./page.jsx"
	const paths = Object.keys(pages);

	for (const filePath of paths) {
		// Bersihkan path untuk mendapatkan route path
		// "./page.jsx" -> ""
		// "./about/page.jsx" -> "about"
		// "./blog/[id]/page.jsx" -> "blog/[id]"
		let routePath = filePath
			.replace(/^\.\//, '')       // Hapus "./" di depan
			.replace(/\/page\.jsx$/, '') // Hapus "/page.jsx" di belakang
			.replace(/^page\.jsx$/, ''); // Jika file di root, jadikan string kosong

		if (routePath === '') {
			routes.push(index('./page.jsx'));
		} else {
			// Ubah format parameter Next-style [id] menjadi format React Router :id
			const segments = routePath.split('/');
			const processedSegments = segments.map((segment) => {
				const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
				if (match) {
					const [_, dots, param] = match;
					if (dots === '...') return '*'; // Catch-all
					return `:${param}`; // Regular param
				}
				return segment;
			});

			const finalPath = processedSegments.join('/');
			routes.push(route(finalPath, filePath));
		}
	}

	return routes;
}

const notFound = route('*?', './__create/not-found.tsx');
const routes = [...generateRoutesFromGlob(), notFound];

export default routes;
