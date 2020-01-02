<script>
	export let active;
	export let content;
</script>

<h1>{active} Post</h1>
<p>Blog post template</p>
<a href="/">Back home</a>
<div>
	<strong>Title: </strong><span>{content.title}</span>
	<strong>Desc: </strong><span>{content.description}</span>
</div>