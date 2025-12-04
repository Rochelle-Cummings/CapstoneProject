import{expect, browser} from '@wdio/globals';
import AboutPage from '../pageobjects/about.page.js';

describe('About Page Left Drop Down Menu Test', () => {
    it('should navigate through the About page left drop down menu items to verify correct links on first half', async () => {

        await browser.url('about/');
        await AboutPage.aboutDropdn.click();
        await browser.url('about/');
        await AboutPage.advocatingForYouthDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/advocacy/');
        await browser.url('about/');
        await AboutPage.AnnualReportDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/');
        await browser.url('about/'); 
        await AboutPage.firstDropdncarrot.click();
        await AboutPage.FinancialStmtsDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/annual-report/financial-statements/');
        await browser.url('about/');
        await AboutPage.GovernanceDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.BoyScoutsofAmericaCharterDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/charter/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.KeyThreeDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/key-three/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.NationalExecutiveBoardDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/national-executive-board/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.BoardMemberGeographicDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/geographic-distribution/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.RetiringBoardMembersDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/retiring-board-members/');
        await browser.url('about/');
        await AboutPage.secondDropdncarrot.click();
        await AboutPage.BoardResourcesDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/governance/resources/');
        await browser.url('about/');
        await AboutPage.ExecutiveCommmDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/executive-communications/');
        await browser.url('about/');
        await AboutPage.ContactScoutingDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/contact-us/');
        await browser.url('about/');
        await AboutPage.DiversityDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/diversity/');
        await browser.url('about/');
        await AboutPage.FAQsDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/faq/');
        await browser.url('about/');
        await AboutPage.ConnectWithUsDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/follow/');
        await browser.url('about/');
        await AboutPage.LocalCouncilDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/local-council-locator/');
    })
})    

describe('About Page Left Drop Down Menu Test 2', () => {
    it('should navigate through the About page left drop down menu items to verify correct links on second half', async () => {
        await browser.url('about/');
        await AboutPage.MembershipPolicyDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/membership-policy/');
        await browser.url('about/');
        await AboutPage.MembershipStandardsDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/membership-standards/');
        await browser.url('about/');
        await AboutPage.ResearchDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/research/');
        await browser.url('about/');
        await AboutPage.thirdDropdncarrot.click();
        await AboutPage.ScoutingEdgeDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/research/the-scouting-edge-study/');
        await browser.url('about/');
        await AboutPage.thirdDropdncarrot.click();
        await AboutPage.EagleScoutsMeritDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/research/eagle-scouts/');
        await browser.url('about/');
        await AboutPage.VolunteerDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/volunteer/');
        await browser.url('about/');
        await AboutPage.WhyScoutingDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/why-scouting/');
        await browser.url('about/');
        await AboutPage.YouthSafetyDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/');
        await browser.url('about/');
        await AboutPage.fourthDropdncarrot.click();
        await AboutPage.AdultLeaderSelectionDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/adult-leader-selection-process/');
        await browser.url('about/');
        await AboutPage.fourthDropdncarrot.click();
        await AboutPage.OurCommitmentDropdn.click();
        await expect(browser).toHaveUrl('https://www.scouting.org/about/youth-safety/our-commitment-to-be-part-of-a-broader-solution/');
    })

    })
