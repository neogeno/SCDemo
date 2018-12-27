import { extendObservable, action, decorate, computed, observable, ObservableMap } from 'mobx';

export class ObservableStore {
	constructor() {
		extendObservable(this, {
			userListJSON: null,
			userDataJSON: null,
			userPostsJSON: null,
			userCommentsJSON: null,
			userCommentsArray: [],
			albumlist: null,
			userID: 0,
			loading: true,
			userThumbnailsArray: []
		});
	}
}
export default new ObservableStore();
