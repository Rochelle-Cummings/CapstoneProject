import {$} from '@wdio/globals';
import Page from './page.js';   

class ProgramsPage extends Page {
    get programsTab() {
        return $('[href="https://www.scouting.org/programs/"]');
    }
    //programs page search filters
    get programsSearch() {
        return $('#programs-age-group-form-options');
    }
    get allAgesOption() {
        return $('[value="pption-all-ages"]');
    }
    get gradeK_FiveOption() {
        return $('{value="option-k-5"]');
    }
    get ageTen_FourteenOption() {
        return $('[value="option-10-14]');
    }
    get ageFourteen_TwentyOption() {
        return $('[value="option-14-20]');
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