import {$, browser} from '@wdio/globals';
import Page from './page.js'; 

 class AwardsPage extends Page {

    awardsItemSelector(name) {
        return $(`//a[contains(text(), "${name}")]`);
    };
    
    pathwayMap=[
        {Name:"Honor Patrol",
        Pathway:"national-honor-patrol/"
        },
        {Name:"Major Gift",
        Pathway:"national-major-gift/"
        },
        {Name:"National Outdoor Award",
        Pathway:"national-medal-outdoor/"
        },
        {Name:"NESA Life",
        Pathway:"nesa-life/"
        },
        {Name:"NESA Outstanding",
        Pathway:"nesa-outstanding/"
        },
        {Name:"North Star",
        Pathway:"north-star/"
        }
    ];

    get nationalDutyToGod() {
        return $(`//a[contains(text(), "National Duty to God")]`);
    };

    get novaAwards() {
        return $('[href="https://www.scouting.org/stem-nova-awards/"]');
    };

    get dutyToGodAwardPathway() {
        return "National_Duty_to_God_Award";
    };

    get expiredContentPathway() {
        return "expired-content/";
    };

    async dutyToGodAwardTest(){
        await browser.url('awards/awards-central/');
        await this.nationalDutyToGod.click();

        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain(this.dutyToGodAwardPathway);
    };

    async novaAwardsTest(){
        await browser.url('awards/awards-central/');
        await this.novaAwards.click();

        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain(this.expiredContentPathway);
    };

    async awardNTest(name, pathway){
       for (const item of this.pathwayMap){
            await browser.url('awards/awards-central/');
            await this.awardsItemSelector(item.Name).click();

            const currentUrl = await browser.getUrl();
            await expect(currentUrl).toContain(item.Pathway);
       };
    };

}
 

 export default new AwardsPage(); 