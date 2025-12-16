import { expect, browser } from '@wdio/globals';
import AwardsPage from '../pageobjects/awards.page.js';

describe('AwardsPage N items', () => {
    it('should navigate through the Awards Central page index letter N items to verify correct links', async () => {
        await AwardsPage.dutyToGodAwardTest();
        await AwardsPage.awardNTest();
        await AwardsPage.novaAwardsTest();
    })

})
