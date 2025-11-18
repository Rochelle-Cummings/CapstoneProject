import { expect } from '@wdio/globals'
import ProgramsPage from '../pageobjects/programs.page.js';
import AboutPage from '../pageobjects/about.page.js';
import AwardsPage from '../pageobjects/awards.page.js';
import HomePage from '../pageobjects/home.page.js';

describe('Captcha Test', () => {
    it('should be able to run through the test clicks without being blocked', async () => {
        console.log('{find} Starting Captcha test');
        await HomePage.getStarted();
        console.log('{find} Homepage loaded successfully');
        await ProgramsPage.programsTab.click();
        await expect(ProgramsPage.programsSearch).toBeDisplayed();
        console.log('{find} Programs page loaded successfully');
        await ProgramsPage.allAgesOption.click();
        await ProgramsPage.gradeK_FiveOption.click();
        await ProgramsPage.ageTen_FourteenOption.click();
        await ProgramsPage.ageFourteen_TwentyOption.click();

        await ProgramsPage.cubScoutingDropdown.click();
        await ProgramsPage.scoutsBSADropdown.click();
        await ProgramsPage.exploringDropdown.click();

        await AboutPage.aboutTab.click();
        await expect(AboutPage.aboutDropdn).toBeDisplayed();
        console.log('{find} About page loaded successfully');
        await AboutPage.aboutDropdn.click();
        await AboutPage.advocatingForYouthDropdn.click();
        await AboutPage.AnnualReportDropdn.click();
        await AboutPage.GovernanceDropdn.click();
        await AboutPage.ExecutiveCommmDropdn.click();

        await AwardsPage.awardsTab.click();
        await expect(AwardsPage.awardCentralDropdn).toBeDisplayed();
        console.log('{find} Awards page loaded successfully');
        await AwardsPage.awardCentralDropdn.click();
        await AwardsPage.nFirstIndexItem.click();
        await AwardsPage.nSecondIndexItem.click();
        await AwardsPage.nThirdIndexItem.click();
        await AwardsPage.nFourthIndexItem.click();
        await AwardsPage.nFifthIndexItem.click();
        await AwardsPage.nSixthIndexItem.click();
        await AwardsPage.nSeventhIndexItem.click();
        await AwardsPage.nEighthIndexItem.click();
        console.log('{find} Captcha test completed successfully');
        
    })
})