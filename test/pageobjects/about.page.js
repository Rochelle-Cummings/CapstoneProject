import {$} from '@wdio/globals';
import Page from './page.js';   

class AboutPage extends Page {
    get aboutTab() {
        return $('[href="https://www.scouting.org/about/"]');
    }
    get aboutDropdn() {
        return $('[class="eael-item-active"]');
    }
    get advocatingForYouthDropdn() {
        return $('#menu-item-236109');
    }
    get AnnualReportDropdn() {
        return $('#menu-item-171430');
    }
    get GovernanceDropdn() {
        return $('#menu-item-206380');
    }
    get ExecutiveCommmDropdn() {
        return $('#menu-item-214803');
    }
    
}    

export default new AboutPage();
