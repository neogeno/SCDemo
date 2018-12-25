import store from './store';

export async function getUsersFromApi() {
	try {
		let response = await fetch('https://jsonplaceholder.typicode.com/users');
		let responseArray = await response.json();
		store.userlist = responseArray;
	} catch (error) {
		console.error(error);
	}
}
