import Login from '../../pageObjects/login';

describe('login, find app nav bar item by text and click', () => {
    beforeAll(() => {
        // temporary, should be set via service config
        browser.setTimeout({ implicit: 30000 });
    });

    it('steam login', async () => {
        await browser.url('/');
        const loginPage = await utam.load(Login);
        await loginPage.login('test@kk.org', 'password123456');
    });
});
