<script>
    import Head from '../Head.svelte';
    import Nav from '../Nav.svelte';
</script>

<html lang="en">
	<Head />
	<body class="hot">
	<Nav />
	<main>
		<h1>About Svelte Component!</h1>
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

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>