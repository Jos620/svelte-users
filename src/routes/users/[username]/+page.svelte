<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>Hey, {data.user.username}!</h1>

<ul>
	{#each data.otherUsers as user}
		<li>
			<a href="/users/{user}">{user}</a>
		</li>
	{/each}
</ul>
