import{expect, browser} from '@wdio/globals';
import AboutPage from '../pageobjects/about.page.js';

describe('About Page Left Drop Down Menu Test', () => {
    it('should navigate through the About page left drop down menu items to verify correct links', async () => {

        await AboutPage.aboutDropdn.click();
        await AboutPage.advocatingForYouthDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/advocacy/');
        await browser.url('about/');
        await AboutPage.AnnualReportDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/');
        await browser.url('about/'); 
        
        await AboutPage.GovernanceDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/');
        await browser.url('about/');
        await AboutPage.ExecutiveCommmDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/executive-communications/');
    })
    })
