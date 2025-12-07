import {$} from '@wdio/globals';
import Page from './page.js';   

class ProgramsPage extends Page {
    //programs page search filters
    get programSearchButton() {
        return $$('[class="search-program-button"]')[0];
    }
    get programsSearch() {
        return $('#programs-age-group-form-options');
    }
    get allAgesOption() {
        return $('[value="option-all-ages"]');
    }
    get gradeK_FiveOption() {
        return $('[value="option-k-5"]');
    }
    get ageTen_FourteenOption() {
        return $('select>option[value="option-10-14"]');
    }
    get ageFourteen_TwentyOption() {
        return $('select>option[value="option-14-20"]');
    } 
    //programs page dropdown menus
    get cubScoutingOpenparagraph() {
        return $('[class="TextRun MacChromeBold SCXW248378262 BCX0"]');
    }
    get scoutsBSAOpenParagraph() {
        return $('[data-id="5001e34f"]');
    }
    get venturingOpenParagraph() {
        return $('[data-id="4a9aff4d"]');
    }
    get seaScoutsOpenParagraph() {
        return $('[data-id="fe85486"]');
    }
    get exploringOpenParagraph() {
        return $('[data-id="1e7e6211"]');
    }

    get cubScoutingDropdown() {
        return $('//div[contains(text(), "Cub Scouting")]');
    }
    get scoutsBSADropdown() {
        return $('//div[contains(text(), "Scouts BSA")]');
    }
    get venturingDropdown() {
        return $('//div[contains(text(), "Venturing")]');
    }
    get seaScoutsDropdown() {
        return $('//div[contains(text(), "Sea Scouts")]');
    }
    get exploringDropdown() {
        return $('//div[contains(text(), "Exploring")]');
    }

}

export default new ProgramsPage();