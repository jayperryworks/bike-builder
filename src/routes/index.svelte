<style>
	
</style>

<script>
	import { parts } from '../stores.js'
	import Urlize from 'urlize'
	import PartListing from '../components/PartListing.svelte'

	let urlize = Urlize.urlize

	function findSelectedOption(options) {
		return options.find(option => option.selected == true)
	}

	function selectOption(option) {

	}
</script>

<svelte:head>
	<title>Your build</title>
</svelte:head>

<header>
	<h2>Your build:</h2>
	<dl>
		<div class="stat-group">
			<dt>Total weight:</dt>
			<dd>8.9kg</dd>
		</div>
		<div class="stat-group">
			<dt>Total price:</dt>
			<dd>$3000.00</dd>
		</div>
	</dl>
</header>

<ul>
	{#each $parts as part}
	<li>
		<PartListing part={part} />
	</li>
	{/each}
</ul>
