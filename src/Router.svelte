<Html {Route} {params} {active} />

<script>
	import Navaid from 'navaid';
	import { onDestroy } from 'svelte';
	import Html from './global/Html.svelte';

	let Route, params, active;
	let uri = location.pathname;
	$: active = uri.split('/')[1] || 'home';

	function draw(m, obj) {
		params = obj || {};
		if (m.preload) {
			m.preload({ params }).then(() => {
				Route = m.default;
				window.scrollTo(0, 0);
			});
		} else {
			Route = m.default;
			window.scrollTo(0, 0);
		}
	}

	function track(obj) {
		uri = obj.state || obj.uri;
		if (window.ga) ga.send('pageview', { dp:uri });
	}

	addEventListener('replacestate', track);
	addEventListener('pushstate', track);
	addEventListener('popstate', track);

	const router = Navaid('/')
		.on('/', () => import('./routed/Index.svelte').then(draw))
		.on('/:slug', () => import('./routed/Pages.svelte').then(draw))
		.on('/blog/:slug', () => import('./routed/Blog.svelte').then(draw))
		.listen();

	onDestroy(router.unlisten);
</script>