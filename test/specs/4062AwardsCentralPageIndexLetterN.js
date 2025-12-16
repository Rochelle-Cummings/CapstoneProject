import { expect, browser } from '@wdio/globals';
import AwardsPage from '../pageobjects/awards.page.js';

describe('AwardsPage N items', () => {
    it('should navigate through the Awards Central page index letter N items to verify correct links', async () => {
        await AwardsPage.dutyToGodAwardTest();
        await AwardsPage.awardNTest();
        await AwardsPage.novaAwardsTest();
        // await browser.url('awards/awards-central/'); 
        // await AwardsPage.nFirstIndexItem.click();
        // const url = await browser.getUrl();
        // await expect(url).toContain('National_Duty_to_God_Award');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nSecondIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/national-honor-patrol/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nThirdIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/national-major-gift/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nFourthIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/national-medal-outdoor/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nFifthIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/nesa-life/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nSixthIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/nesa-outstanding/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nSeventhIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/awards/awards-central/north-star/');
        // await browser.url('awards/awards-central/');
        // await AwardsPage.nEighthIndexItem.click();
        // await expect(browser).toHaveUrl('https://www.scouting.org/expired-content/');
    })

})
