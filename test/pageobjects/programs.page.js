import {$} from '@wdio/globals';
import Page from './page.js';   

class ProgramsPage extends Page {
    get programsTab() {
        return $('a[id="sm-1763446414306758-1"]');
    }
    //programs page search filters
    get programsSearch() {
        return $('#programs-age-group-form-options');
    }
    get allAgesOption() {
        return $('[class="form-control"]');
    }
    get gradeK_FiveOption() {
        return $('[value="option-k-5"]');
    }
    get ageTen_FourteenOption() {
        return $('option[value="option-10-14]');
    }
    get ageFourteen_TwentyOption() {
        return $('option[value="option-14-20]');
    }
    //programs page dropdown menus
    dropDownWithEnding(ending) {
        return $(`[class="pp-accordion-item option option-all-ages ${ending}"]`);
    }
    get cubScoutingDropdown() {
        return this.dropDownWithEnding("option-k-5");
    }
    get scoutsBSADropdown() {
        return this.dropDownWithEnding("option-10-14 option-14-20"); //fix later
    
    }
    //these have the same ending, so need to fix these. 
    // get venturingDropdown() {
    //     return this.dropDownWithEnding("option-14-20");
    // }
    // get seaScoutsDropdown() {
    //     return this.dropDownWithEnding("option-14-20");
    // }
    get exploringDropdown() {
        return this.dropDownWithEnding("option-10-14 option-14-20"); //fix later
    }


}

export default new ProgramsPage();