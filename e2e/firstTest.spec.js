describe('SCDemo', () => {
	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have choose user screen', async () => {
		await expect(element(by.id('chooseUserScreen'))).toBeVisible();
	});

	it('should show user info screen after tapping first user', async () => {
		await element(by.id('user_1')).tap();
		await expect(element(by.text('Leanne Graham'))).toBeVisible();
	});

	// it('should show todo list after tapping todo tab', async () => {
	// 	await element(by.label('Todos')).tap();
	// 	await expect(element(by.text('Incomplete'))).toBeVisible();
	// });
});
