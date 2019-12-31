<html lang="en" id="target">
	<Head />
	<body class="hot">
		<Nav {active} />
		<main>
			<svelte:component this={Route} {params} />
		</main>
	</body>
</html>

<script>
	import Navaid from 'navaid';
	import { onDestroy } from 'svelte';
	import Nav from './Nav.svelte';
	import Head from './Head.svelte';

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
		.on('/about', () => import('./routed/About.svelte').then(draw))
		.listen();

	onDestroy(router.unlisten);
</script>