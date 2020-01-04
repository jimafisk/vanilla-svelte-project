<script>
    import Head from './Head.svelte';
	import Nav from './Nav.svelte';

	export let Route, params, node, allNodes;

    const makeTitle = filename => {
		if (filename) {
			// Remove file extension.
			filename = filename.split('.').slice(0, -1).join('.');
			// Convert underscores and hyphens to spaces.
			filename = filename.replace(/_|-/g,' ');
			// Capitalize first letter of each word.
			filename = filename.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
		} 
		return filename;
    }
</script>

<html lang="en">
	<Head title={makeTitle(node.filename)} />
	<body>
		<Nav />
		<main>
			<svelte:component this={Route} {params} {...node.fields} {allNodes} />
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
	html, body {
		position: relative;
		width: 100%;
		height: 100%;
	}
	body {
		color: #333;
		margin: 0;
		padding: 8px;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		padding: 0;
		margin: 0;
	}
	:global(body) {
        --color-primary: #00BCD4;
        --color-primary-dark: #006775;
	}
	:global(a) {
		color: var(--color-primary-dark);
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(a:visited) {
		color: rgb(0,80,160);
	}

	:global(label) {
		display: block;
	}

	:global(input, button, select, textarea) {
		font-family: inherit;
		font-size: inherit;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	:global(input:disabled) {
		color: #ccc;
	}

	:global(input[type="range"]) {
		height: 0;
	}

	:global(button) {
		color: #333;
		background-color: #f4f4f4;
		outline: none;
	}

	:global(button:disabled) {
		color: #999;
	}

	:global(button:not(:disabled):active) {
		background-color: #ddd;
	}

	:global(button:focus) {
		border-color: #666;
	}
	:global(h1) {
		margin: 0;
	}
</style>