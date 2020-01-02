<script>
	export let active, allNodes;
	export let title, description;
</script>

<h1>{active} Page</h1>
<p>Pages template</p>
<a href="/">Back home</a>
<div>
<strong>Title:</strong><span>{title}</span>
<strong>Desc:</strong><span>{description}</span>
</div>

<h3>All nodes test:</h3>
{#each allNodes as node}
	<a href="{Object.keys(node)[0]}">{node[Object.keys(node)[0]].title}</a>
{/each}

<style>
	a {
		display: inline-block;
		margin: 0 10px;
	}
</style>