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

export async function getPostsFromApi(userID) {
	try {
		store.loading = true;
		let response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userID);
		let responseArray = await response.json();
		store.userPostsJSON = JSON.stringify(responseArray);
		store.loading = false;
		return responseArray;
	} catch (error) {
		console.error(error);
	}
}

export async function getCommentsFromApi(postID) {
	try {
		let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postID);
		let responseArray = await response.json();
		console.log('Loaded Comments for postid:', responseArray[0].postId);
		store.userCommentsArray.push(responseArray);
	} catch (error) {
		console.error(error);
	}
}

//
