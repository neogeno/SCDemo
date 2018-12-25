import { extendObservable, action, decorate, computed, observable, ObservableMap } from 'mobx';

export class ObservableStore {
	constructor() {
		extendObservable(this, {
			userListJSON: null,
			albumlist: null,
			loading: true,
			userThumbnailsArray: []
		});
	}
}
export default new ObservableStore();
