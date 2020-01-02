<script>
	export let active, node;
</script>

<h1>{active} Page</h1>
<p>Pages template</p>
<a href="/">Back home</a>
<div>
<strong>Title:</strong><span>{node.title}</span>
<strong>Desc:</strong><span>{node.description}</span>
</div>