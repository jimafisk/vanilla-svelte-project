<script>
	export let name;
</script>

<html lang="en">
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width,initial-scale=1'>

		<title>Svelte app</title>

		<link rel='icon' type='image/png' href='/favicon.png'>
		<link rel='stylesheet' href='/global.css'>
		<link rel='stylesheet' href='/build/bundle.css'>

		<script defer src='/build/bundle.js'></script>
	</head>
	<body class="hot">
	<main>
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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