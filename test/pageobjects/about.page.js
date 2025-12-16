import {$, $$, browser} from '@wdio/globals';
import Page from './page.js';   

class AboutPage extends Page {

    aboutMenuSelector(name) {
        return $(`//a[contains(text(), "${name}")]`);
    };
    arrayAboutMenuNames=[
        "About Scouting America", 
        "Advocating for Youth", 
        "Annual Report", 
        "Governance", 
        "Executive Communications",
        "Contact Scouting America", 
        "Diversity",
        "Frequently Asked Questions", 
        "Connect With Us", 
        "Local Council Locator", 
        "Membership Policy",
        "Membership Standards",
        "Research", 
        "Volunteer",
        "Why Scouting", 
        "Youth Safety"
        ];

    aboutURLPathways(path){
        return browser.url(`${path}`);
    };   
    arrayAboutMenuLinksPaths=[
        "about/",
        "about/advocacy/",
        "about/annual-report/",
        "about/governance/",
        "about/executive-communications/",
        "about/contact-us/",
        "about/diversity/",
        "about/faq/",
        "about/follow/",
        "about/local-council-locator/",
        "about/membership-policy/",
        "about/membership-standards/",
        "about/research/",
        "about/volunteer/",
        "about/why-scouting/",
        "about/youth-safety/"
    ];
    async mainMenuTest(){
        await browser.url('about/');
        for (let i = 0; i < this.arrayAboutMenuNames.length; i++) {
            const menuItem = this.aboutMenuSelector(this.arrayAboutMenuNames[i]);
            await menuItem.click();

            const currentUrl = await browser.getUrl();
            await expect(currentUrl).toContain(this.arrayAboutMenuLinksPaths[i])
            await browser.url('about/');
        }
    };

    get financialStmtSelector() {
            return $('#menu-item-172585');
    };
    get financialStmtPathway() {
        return ("about/annual-report/financial-statements/");
    };
    governanceSelectors=[
        "Boy Scouts of America Charter",
        "Key 3",
        "National Executive Board",
        "Board Member Geographic Distribution",
        "Retiring Board Members",
        "Board Resources"
    ];

    researchSelectors=[
        "The Scouting Edge: Ethics",
        "Eagle Scouts: Merit"
    ];

    youthSafetySelectors=[
        "Adult Leader Selection Process",
        "Our Commitment to be Part of a Broader Solution"
    ];

    get carrotSelectors() {
        return $$('[class="fas fa-angle-down"]');
    };
    

    linkPathMap = [
        {Carrot: 1, 
        Name: "Boy Scouts of America Charter", 
        Pathway: "about/governance/charter/",
        },
        {Carrot: 1, 
        Name: "Key 3", 
        Pathway: "about/governance/key-three/"
        },
        {Carrot: 1, 
        Name: "National Executive Board", 
        Pathway: "about/governance/national-executive-board/"
        },
        {Carrot: 1, 
        Name: "Board Member Geographic Distribution", 
        Pathway: "about/governance/geographic-distribution/"
        },
        {Carrot: 1, 
        Name: "Retiring Board Members", 
        Pathway: "about/governance/retiring-board-members/"
        },
        {Carrot: 1, 
        Name:"Board Resources", 
        Pathway: "about/governance/resources/"
        },
        {Carrot: 2, 
        Name: "The Scouting Edge: Ethics",
        Pathway: "about/research/the-scouting-edge-study/"
        },
        {Carrot: 2, 
        Name: "Eagle Scouts: Merit",
        Pathway: "about/research/eagle-scouts/"
        },
        {Carrot: 3, 
        Name: "Adult Leader Selection Process",
        Pathway: "about/youth-safety/adult-leader-selection-process/"
        },
        {Carrot: 3, 
        Name:"Our Commitment to be Part of a Broader Solution", 
        Pathway: "about/youth-safety/our-commitment-to-be-part-of-a-broader-solution/"
        }
        ];

    async financialTest() {
        await browser.url('about/');
        const carrots = await this.carrotSelectors;
        await carrots[0].click();
        await this.financialStmtSelector.click();

        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain(this.financialStmtPathway);
        await browser.url('about/');
    };

    async secondaryMenuTest(carrot, name, pathway) {
        for (const item of this.linkPathMap) {
            await browser.url('about/');
            const carrots = await this.carrotSelectors;
            await carrots[item.Carrot].click();

            await this.aboutMenuSelector(item.Name).click();
            const currentUrl = await browser.getUrl();
            await expect(currentUrl).toContain(item.Pathway);
        };
    };

    async openAndCloseMenuTest(){
        // describe('About Page Open and Close Carrot Test', () => {
//     it('should open each dropdown with a carrot down icon and close the previous dropdown when a new one is opened', async () => {
        await browser.url('about/');
        const carrots = await this.carrotSelectors;
        await carrots[0].click();
        await expect(this.financialStmtSelector).toBeDisplayed();
        for (let i = 0; i < this.governanceSelectors.length; i++) {
            await expect(this.aboutMenuSelector(this.governanceSelectors[i])).not.toBeDisplayed();
        }
        for (let j = 0; j < this.researchSelectors.length; j++) {
            await expect(this.aboutMenuSelector(this.researchSelectors[j])).not.toBeDisplayed();
        }
        for (let k = 0; k < this.youthSafetySelectors.length; k++) {
            await expect(this.aboutMenuSelector(this.youthSafetySelectors[k])).not.toBeDisplayed();
        };

        await carrots[1].click();
        for (let i = 0; i < this.governanceSelectors.length; i++) {
            await expect(this.aboutMenuSelector(this.governanceSelectors[i])).toBeDisplayed();
            await expect(this.financialStmtSelector).not.toBeDisplayed();
            for (let j = 0; j < this.researchSelectors.length; j++) {
                await expect(this.aboutMenuSelector(this.researchSelectors[j])).not.toBeDisplayed();
            }
            for (let k = 0; k < this.youthSafetySelectors.length; k++) {
                await expect(this.aboutMenuSelector(this.youthSafetySelectors[k])).not.toBeDisplayed();
            }
        };

        await carrots[2].click();
        for (let j = 0; j < this.researchSelectors.length; j++) {
            await expect(this.aboutMenuSelector(this.researchSelectors[j])).toBeDisplayed();
            for (let i = 0; i < this.governanceSelectors.length; i++) {
                await expect(this.aboutMenuSelector(this.governanceSelectors[i])).not.toBeDisplayed();
            }
            for (let k = 0; k < this.youthSafetySelectors.length; k++) {
                await expect(this.aboutMenuSelector(this.youthSafetySelectors[k])).not.toBeDisplayed();
            }  
            await expect(this.financialStmtSelector).not.toBeDisplayed();
        };
        
        await carrots[3].click();
        for (let k = 0; k < this.youthSafetySelectors.length; k++) {
            await expect(this.aboutMenuSelector(this.youthSafetySelectors[k])).toBeDisplayed();
            for (let j = 0; j < this.researchSelectors.length; j++) {
                await expect(this.aboutMenuSelector(this.researchSelectors[j])).not.toBeDisplayed();
            }
            for (let i = 0; i < this.governanceSelectors.length; i++) {
                await expect(this.aboutMenuSelector(this.governanceSelectors[i])).not.toBeDisplayed();
            }
           await expect(this.financialStmtSelector).not.toBeDisplayed();
        };
    };
  

    

}

export default new AboutPage();
