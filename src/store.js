import { extendObservable, action, decorate, computed, observable, ObservableMap } from 'mobx';

export class ObservableStore {
	constructor() {
		extendObservable(this, {
			userlist: [],
			albumlist: null
		});
	}
}
export default new ObservableStore();
