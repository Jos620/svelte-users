<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.users as user}
		<li>
			<a href="/users/{user}">{user}</a>
		</li>
	{/each}
</ul>
