import{expect, browser} from '@wdio/globals';
import AboutPage from '../pageobjects/about.page.js';

// describe('About Page Left Drop Down Menu Test section 1', () => {
//     it('should navigate through the About page left drop down menu items to verify correct links on section 1/3', async () => {

//         await browser.url('about/');
//         await AboutPage.aboutDropdn.click();
//         await browser.url('about/');
//         await AboutPage.advocatingForYouthDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/advocacy/');
//         await browser.url('about/');
//         await AboutPage.AnnualReportDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/');
//         await browser.url('about/'); 
//         await AboutPage.firstDropdncarrot.click();
//         await AboutPage.FinancialStmtsDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/financial-statements/');
//         await browser.url('about/');
//         await AboutPage.GovernanceDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.BoyScoutsofAmericaCharterDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/charter/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.KeyThreeDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/key-three/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.NationalExecutiveBoardDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/national-executive-board/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.BoardMemberGeographicDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/geographic-distribution/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.RetiringBoardMembersDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/retiring-board-members/');
//         await browser.url('about/');
//         await AboutPage.secondDropdncarrot.click();
//         await AboutPage.BoardResourcesDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/resources/');
        
//     })
// })  

// describe('About Page Left Drop Down Menu Test section 2', () => {
//     it('should navigate through the About page left drop down menu items to verify correct links on section 2/3', async () => {
//         await browser.url('about/');
//         await AboutPage.ExecutiveCommmDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/executive-communications/');
//         await browser.url('about/');
//         await AboutPage.ContactScoutingDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/contact-us/');
//         await browser.url('about/');
//         await AboutPage.DiversityDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/diversity/');
//         await browser.url('about/');
//         await AboutPage.FAQsDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/faq/');
//         await browser.url('about/');
//         await AboutPage.ConnectWithUsDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/follow/');
//         await browser.url('about/');
//         await AboutPage.LocalCouncilDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/local-council-locator/');
//         await browser.url('about/');
//         await AboutPage.MembershipPolicyDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/membership-policy/');
//         await browser.url('about/');
//         await AboutPage.MembershipStandardsDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/membership-standards/');
//     })
// })    

// describe('About Page Left Drop Down Menu Test section 3', () => {
//     it('should navigate through the About page left drop down menu items to verify correct links on section 3/3', async () => {

//         await browser.url('about/');
//         await AboutPage.ResearchDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/research/');
//         await browser.url('about/');
//         await AboutPage.thirdDropdncarrot.click();
//         await AboutPage.ScoutingEdgeDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/research/the-scouting-edge-study/');
//         await browser.url('about/');
//         await AboutPage.thirdDropdncarrot.click();
//         await AboutPage.EagleScoutsMeritDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/research/eagle-scouts/');
//         await browser.url('about/');
//         await AboutPage.VolunteerDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/volunteer/');
//         await browser.url('about/');
//         await AboutPage.WhyScoutingDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/why-scouting/');
//         await browser.url('about/');
//         await AboutPage.YouthSafetyDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/');
//         await browser.url('about/');
//         await AboutPage.fourthDropdncarrot.click();
//         await AboutPage.AdultLeaderSelectionDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/adult-leader-selection-process/');
//         await browser.url('about/');
//         await AboutPage.fourthDropdncarrot.click();
//         await AboutPage.OurCommitmentDropdn.click();
//         await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/our-commitment-to-be-part-of-a-broader-solution/');
//     })

// })
// describe('About Page Open and Close Carrot Test', () => {
//     it('should open each dropdown with a carrot down icon and close the previous dropdown when a new one is opened', async () => {
//         await browser.url('about/');
//         await AboutPage.firstDropdncarrot.click();
//         await expect(AboutPage.FinancialStmtsDropdn).toBeDisplayed();

//         await AboutPage.secondDropdncarrot.click();
//         await expect(AboutPage.BoyScoutsofAmericaCharterDropdn).toBeDisplayed();
//         await expect(AboutPage.KeyThreeDropdn).toBeDisplayed();
//         await expect(AboutPage.NationalExecutiveBoardDropdn).toBeDisplayed();
//         await expect(AboutPage.BoardMemberGeographicDropdn).toBeDisplayed();
//         await expect(AboutPage.RetiringBoardMembersDropdn).toBeDisplayed();
//         await expect(AboutPage.BoardResourcesDropdn).toBeDisplayed();
//         await expect(AboutPage.FinancialStmtsDropdn).not.toBeDisplayed();

//         await AboutPage.thirdDropdncarrot.click();
//         await expect(AboutPage.ScoutingEdgeDropdn).toBeDisplayed();
//         await expect(AboutPage.EagleScoutsMeritDropdn).toBeDisplayed();
//         await expect(AboutPage.BoyScoutsofAmericaCharterDropdn).not.toBeDisplayed();

//         await AboutPage.fourthDropdncarrot.click();
//         await expect(AboutPage.AdultLeaderSelectionDropdn).toBeDisplayed();
//         await expect(AboutPage.OurCommitmentDropdn).toBeDisplayed();
//         await expect(AboutPage.ScoutingEdgeDropdn).not.toBeDisplayed();
//     })
// })    