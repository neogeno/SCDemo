import store from './store';

function fetchData(url, param = '') {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(url);
			store.loading = true;
			let response = await fetch(url + param);
			store.loading = false;
			resolve(response.json());
		} catch (error) {
			console.error(error);
			reject(error);
		}
	});
}

export async function getUsersFromApi() {
	let responseArray = await fetchData('https://jsonplaceholder.typicode.com/users');
	store.userListJSON = JSON.stringify(responseArray);
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

export async function getTodosFromApi(userID) {
	let responseArray = await fetchData('https://jsonplaceholder.typicode.com/todos?userID=', userID);
	store.userTodoJSON = JSON.stringify(responseArray);
	console.log('todo:', responseArray);
}

export async function getAlbumsFromApi(userID) {
	let responseArray = await fetchData('https://jsonplaceholder.typicode.com/albums?userId=', userID);
	store.userAlbumJSON = JSON.stringify(responseArray);
	console.log('albums:', responseArray);
}

export async function getPhotosFromApi(albumID) {
	console.log('Retrieving Photos for album:', albumID);
	let responseArray = await fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`);
	var mediaArray = [];
	responseArray.forEach((e) => {
		let media = {
			URI: e.url,
			thumbnail: e.thumbnailUrl,
			id: String(e.id),
			title: 'Title:',
			description: e.title
		};
		// let media = {
		// 	thumb: e.thumbnailUrl, // thumbnail version of the photo to be displayed in grid view. actual photo is used if thumb is not provided
		// 	photo: e.url, // a remote photo or local media url
		// 	id: e.id, // unique identifer for the photo; can be omitted if the `thumb`/`photo` will always be unique
		// 	caption: e.title, // photo caption to be displayed
		// 	selected: false // set the photo selected initially(default is false)
		// };
		mediaArray.push(media);
	});
	console.log('Media Array:', mediaArray);
	store.userPhotoJSON = JSON.stringify(mediaArray);
	console.log('albums:', responseArray);
}
