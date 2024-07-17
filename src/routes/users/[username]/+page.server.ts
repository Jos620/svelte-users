import type { PageServerLoad } from './$types';

async function getUser(username: string) {
	return {
		username
	};
}

export const load: PageServerLoad = async ({ params, parent }) => {
	const user = await getUser(params.username);

	const { users } = await parent();

	const otherUsers = users.filter((u) => u !== user.username);

	return {
		user,
		otherUsers
	};
};
