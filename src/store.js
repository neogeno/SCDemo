import { extendObservable, action, decorate, computed, observable, ObservableMap } from 'mobx';

export class ObservableStore {
	constructor() {
		extendObservable(this, {
			userListJSON: null,
			userDataJSON: null,
			userPostsJSON: null,
			userAlbumJSON: null,
			userPhotoJSON: null,
			userCommentsJSON: null,
			userCommentsArray: [],
			userTodoJSON: null,
			userID: 0,
			title: 'Standard Chartered',
			selectedAlbumID: 0,
			loading: true
		});
	}
}
export default new ObservableStore();
