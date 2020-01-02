<script>
	export let name = 'Plenti';
	export let allNodes;
</script>

<section id="intro">
	<img alt="plenti logo" src="/build/plenti.svg" />
	<h1>{name}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<h3>All site content:</h3>
	{#each allNodes as node}
		<a href="{Object.keys(node)[0]}">{node[Object.keys(node)[0]].title}</a>
		<br />
	{/each}
</section>

<style>
	#intro {
		margin: 50px;
	}
	h1 {
		color: var(--color-primary);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>