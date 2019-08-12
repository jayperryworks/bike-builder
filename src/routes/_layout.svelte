<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<header>
	<h1>Bike builder</h1>
	<button>Export</button>
</header>

<main>
	<slot></slot>
</main>

<footer>
	<small>This is an <a href="https://github.com/jayperryworks/bike-builder/">open-source experiment</a> freely available under the <a href="https://github.com/jayperryworks/bike-builder/blob/master/LICENSE">MIT License</a>. Go nuts.</small>
</footer>