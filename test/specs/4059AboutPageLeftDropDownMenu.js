import AboutPage from '../pageobjects/about.page.js';

describe('About Page Left Drop Down Menu First Level Items', () => {
    it('should navigate through drop down menus and check cooresponding links on first level menu', async () => {
        await AboutPage.mainMenuTest();
    })
})

describe('About Page Left Drop Down Menu Secondary Items', () => {
    it('should navigate through drop down menus and check corresponding links on submenu options', async () => {
        await AboutPage.financialTest();
        await AboutPage.secondaryMenuTest();
    })
});

describe('About Page Open and Close Carrot Test', () => {
     it('should open each dropdown with a carrot down icon and close the previous dropdown when a new one is opened', async () => {
        await AboutPage.openAndCloseMenuTest();
    })
});