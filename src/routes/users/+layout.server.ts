async function loadUsers() {
	return ['Mateus', 'Robson', 'Phill', 'Kewyn'];
}

export async function load() {
	const users = await loadUsers();

	return {
		users
	};
}
