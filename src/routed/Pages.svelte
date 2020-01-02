<script>
	export let active, content;
</script>

<h1>{active} Page</h1>
<p>Pages template</p>
<a href="/">Back home</a>
<div>
<strong>Title:</strong><span>{content.title}</span>
<strong>Desc:</strong><span>{content.description}</span>
</div>