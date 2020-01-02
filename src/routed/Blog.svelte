<script>
	export let active;
	export let node;
</script>

<h1>{active} Post</h1>
<p>Blog post template</p>
<a href="/">Back home</a>
<div>
	<strong>Title: </strong><span>{node.title}</span>
	<strong>Desc: </strong><span>{node.description}</span>
</div>