<script lang="ts">
	import Table from '../components/Table.svelte';
	// import Debug from '../components/Debug.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	$: roles = data.roles.slice(-3);
</script>

<h1>Roles list</h1>

<Table rows={roles} />

<!-- <Debug data={roles} /> -->