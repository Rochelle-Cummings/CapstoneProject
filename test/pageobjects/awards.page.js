import {$, browser} from '@wdio/globals';
import Page from './page.js'; 

 class AwardsPage extends Page {

    awardsSelector(name) {
        return $(`[href="https://www.awards-central/"${name}""]`);
    }
    // aboutMenuSelector(name) {
    //     return $(`//a[contains(text(), "${name}")]`);
    // }
    pathwayMap=[
        {name:"/awards/awards-central/national-honor-patrol",
        pathway:"national-honor-patrol/"
        },
        {name:"/awards/awards-central/national-major-gift",
        pathway:"national-major-gift/"
        },
        {name:"/awards/awards-central/national-medal-outdoor",
        pathway:"national-medal-outdoor/"
        },
        {name:"/awards/awards-central/nesa-life",
        pathway:"nesa-life/"
        },
        {name:"/awards/awards-central/nesa-outstanding",
        pathway:"nesa-outstanding/"
        },
        {name:"/awards/awards-central/north-star",
        pathway:"north-star/"
        }
    ];

    get nationalDutyToGod() {
        return $(`//a[contains(text(), "National Duty to God")]`);
    };
    // get nSecondIndexItem() {
    //     return $('[href="/awards/awards-central/national-honor-patrol"]');
    // }
    // get nThirdIndexItem() {
    //     return $('[href="/awards/awards-central/national-major-gift"]');
    // }
    // get nFourthIndexItem() {
    //     return $('[href="/awards/awards-central/national-medal-outdoor"]');
    // }
    // get nFifthIndexItem() {
    //     return $('[href="/awards/awards-central/nesa-life"]');
    // }
    // get nSixthIndexItem() {
    //     return $('[href="/awards/awards-central/nesa-outstanding"]');
    // }
    // get nSeventhIndexItem() {
    //     return $('[href="/awards/awards-central/north-star"]');
    // }
    get novaAwards() {
        return $('[href="https://www.scouting.org/stem-nova-awards/"]');
    }

    get dutyToGodAwardPathway() {
        return "National_Duty_to_God_Award";
    }

    get expiredContentPathway() {
        return "expired-content/";
    }

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

    async awardNTest(){
       for (const item of this.pathwayMap){
            await browser.url('awards/awards-central/');
            await this.awardsSelector(item.name).click();

            const currentUrl = await browser.getUrl();
            await expect(currentUrl).toContain(item.pathway);
       }
    };

}
 

 export default new AwardsPage(); 