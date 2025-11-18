// import { expect, browser } from '@wdio/globals'
// import ProgramsPage from '../pageobjects/programs.page.js';
// import AboutPage from '../pageobjects/about.page.js';
// import AwardsPage from '../pageobjects/awards.page.js';
// import HomePage from '../pageobjects/home.page.js';

// describe('Captcha Test', () => {
//     it('should be able to run through the test clicks without being blocked', async () => {
//         console.log('{find} Starting Captcha test');
//         // await HomePage.getStarted();
//         await browser.url('about/'); 
//         console.log('{find} Homepage loaded successfully');

//         //await AboutPage.aboutTab.click();
//         //await expect(AboutPage.aboutDropdn).toBeDisplayed();
//         //console.log('{find} About page loaded successfully');
//         await AboutPage.aboutDropdn.click();
//         await AboutPage.advocatingForYouthDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/advocacy/');
//         await browser.url('about/');
//         await AboutPage.AnnualReportDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/');
//         await browser.url('about/'); 
//         await AboutPage.GovernanceDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/');
//         await browser.url('about/');
//         await AboutPage.ExecutiveCommmDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/executive-communications/');

//         //await AwardsPage.awardsTab.click();
//         //await AwardsPage.awardsTab.click();
//         //await expect(AwardsPage.awardCentralDropdn).toBeDisplayed();
//         //console.log('{find} Awards page loaded successfully');
//         //await AwardsPage.awardCentralDropdn.click();
//         await browser.url('awards/awards-central/'); 
//         await AwardsPage.nFirstIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nSecondIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nThirdIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nFourthIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nFifthIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nSixthIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nSeventhIndexItem.click();
//         await browser.url('awards/awards-central/');
//         await AwardsPage.nEighthIndexItem.click();

//     })
// })
//This test didn't pass, just leaving it here for reference.
// describe('Captcha Test 2', () => {
//     it('Programs page clicks', async () => {
//         //await ProgramsPage.programsTab.click();
//         //await expect(ProgramsPage.programsSearch).toBeDisplayed();
//         await browser.url('programs/');
//         //console.log('{find} Programs page loaded successfully');
//         await ProgramsPage.allAgesOption.click();
//         await ProgramsPage.gradeK_FiveOption.click();
//         await ProgramsPage.ageTen_FourteenOption.click();
//         await ProgramsPage.ageFourteen_TwentyOption.click();

//         await ProgramsPage.cubScoutingDropdown.click();
//         await ProgramsPage.scoutsBSADropdown.click();
//         await ProgramsPage.exploringDropdown.click();
//         console.log('{find} Captcha test completed successfully');
        
//     })
//})