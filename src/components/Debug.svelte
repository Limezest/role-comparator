<script lang="ts">
	export let data: any;
</script>

<h2>Debug ⤵️</h2>
<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
	pre {
		background-color: #eee;
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>
