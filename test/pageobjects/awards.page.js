import {$} from '@wdio/globals';
import Page from './page.js'; 

 class AwardsPage extends Page {
    get awardsTab() {
        return $('[href="https://www.scouting.org/awards/"]');
    }
    get awardCentralDropdn() {
        return $('[href="https://www.scouting.org/awards/awards-central/"]');
    }
    get nFirstIndexItem() {
        return $('[href="https://filestore.scouting.org/filestore/pdf/National_Duty_to_God_Award.pdf"]');
    }
    get nSecondIndexItem() {
        return $('[href="/awards/awards-central/national-honor-patrol"]');
    }
    get nThirdIndexItem() {
        return $('[href="/awards/awards-central/national-major-gift"]');
    }
    get nFourthIndexItem() {
        return $('[href="/awards/awards-central/national-medal-outdoor"]');
    }
    get nFifthIndexItem() {
        return $('[href="/awards/awards-central/nesa-life"]');
    }
    get nSixthIndexItem() {
        return $('[href="/awards/awards-central/nesa-outstanding"]');
    }
    get nSeventhIndexItem() {
        return $('[href="/awards/awards-central/north-star"]');
    }
    get nEighthIndexItem() {
        return $('[href="https://www.scouting.org/stem-nova-awards/"]');
    }
    



 }

 export default new AwardsPage(); 