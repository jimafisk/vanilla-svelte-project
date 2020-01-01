<script>
    import Head from './Head.svelte';
	import Nav from './Nav.svelte';

    export let Route, params;
</script>

<html lang="en">
	<Head title={Route} />
	<body>
		<Nav />
		<main>
			<svelte:component this={Route} {params} />
		</main>
	</body>
</html>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 50px auto 0;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	:global(body) {
        --color-primary: #00BCD4;

		padding: 0;
		margin: 0;
	}
</style>