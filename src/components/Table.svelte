<script lang="ts">
	import type { Role } from '../types/role';

	export let rows: Role[] = [];
</script>

<span>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Title</th>
				<th>Description</th>
				<th>Stage</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					<td>{row.name}</td>
					<td>{row.title}</td>
					<td>{row.description}</td>
					<td>{row.stage}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</span>

<style>
	:root {
		--thead-border-color: #aaa;
		--thead-background-color: #f1f1f1;
		--td-border-color: #ddd;
		--tr-even-background-color: #f9f9f9;
	}

	span {
		display: block;
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th,
	td {
		border: 1px solid var(--td-border-color);
		padding: 0.5rem;
	}

	thead {
		background-color: var(--thead-background-color);
	}

	thead > tr > th {
		border: 1px solid var(--thead-border-color);
	}

	tr:nth-child(even) {
		background-color: var(--tr-even-background-color);
	}
</style>
