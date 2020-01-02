<script>
	export let name = 'Plenti';
</script>

<section id="intro">
	<img alt="plenti logo" src="/build/plenti.svg" />
	<h1>{name}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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