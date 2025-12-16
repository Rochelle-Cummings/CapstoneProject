import ProgramsPage from '../pageobjects/programs.page.js';

describe('Programs Page Search menu items filter results correctly', () => {
    it('Filters each correctly', async () => {
        await ProgramsPage.searchFilterTest();
    })
})
