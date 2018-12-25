import store from './store';

export async function getUsersFromApi() {
	try {
		store.loading = true;
		let response = await fetch('https://jsonplaceholder.typicode.com/users');
		let responseArray = await response.json();
		store.userListJSON = JSON.stringify(responseArray);
		store.loading = false;
	} catch (error) {
		console.error(error);
	}
}
