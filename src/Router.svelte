<Html {Route} {params} {active} {content} />

<script>
	import Navaid from 'navaid';
	import Content from './Content.js';
	import { onDestroy } from 'svelte';
	import Html from './global/Html.svelte';

	let Route, params, active, content;
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

		console.log(uri);
		content = Content.get('blog', uri);
		console.log('content: ');
		console.log(content);
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