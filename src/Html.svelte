<script>
	import Nav from './Nav.svelte';
    import Head from './Head.svelte';

    export let Route, params, name;
</script>

<html lang="en">
	<Head />
	<body>
		<Nav />
		<main>
			<svelte:component this={Route} {params} {name} />
		</main>
	</body>
</html>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	:global(body) {
		padding: 0;
		margin: 0;
	}
</style>