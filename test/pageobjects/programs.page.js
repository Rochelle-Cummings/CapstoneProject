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
    // get cubScoutingOpenparagraph() {
    //     return $('[data-id="10728773"]');
    // }
    // get scoutsBSAOpenParagraph() {
    //     return $('[data-id="5001e34f"]');
    // }
    // get venturingOpenParagraph() {
    //     return $('[data-id="4a9aff4d"]');
    // }
    // get seaScoutsOpenParagraph() {
    //     return $('[data-id="fe85486"]');
    // }
    // get exploringOpenParagraph() {
    //     return $('[data-id="1e7e6211"]');
    // }
    programsDropDownSelector(name){
        return $(`//div[contains(text(), "${name}")]`);
    };

    programPathwayMap=[
        {Name: "Cub Scouting",
        OpenedParagSelector: $('[data-id="10728773"]')
        },
        {Name: "Scouts BSA",
        OpenedParagSelector: $('[data-id="5001e34f"]')
        },
        {Name: "Venturing",
        OpenedParagSelector: $('[data-id="4a9aff4d"]')
        },
        {Name: "Sea Scouts",
        OpenedParagSelector: $('[data-id="fe85486"]')
        },
        {Name: "Exploring",
        OpenedParagSelector: $('[data-id="1e7e6211"]')
        }
    ]

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

    async openAndCloseTest(){
        await browser.url('programs/');
        await ProgramsPage.scoutsBSADropdown.click();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).toBeDisplayed();
        await expect(ProgramsPage.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(ProgramsPage.venturingOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();
       
        await ProgramsPage.cubScoutingDropdown.click();
        await expect(ProgramsPage.cubScoutingOpenparagraph).toBeDisplayed();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.venturingOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();

        await ProgramsPage.venturingDropdown.click();
        await expect(ProgramsPage.venturingOpenParagraph).toBeDisplayed();
        await expect(ProgramsPage.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();

        await ProgramsPage.seaScoutsDropdown.click();
        await expect(ProgramsPage.seaScoutsOpenParagraph).toBeDisplayed();
        await expect(ProgramsPage.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.venturingOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();
  
        await ProgramsPage.exploringDropdown.click();
        await expect(ProgramsPage.exploringOpenParagraph).toBeDisplayed();
        await expect(ProgramsPage.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.venturingOpenParagraph).not.toBeDisplayed();
        await expect(ProgramsPage.seaScoutsOpenParagraph).not.toBeDisplayed();
        await ProgramsPage.cubScoutingDropdown.click();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();

    }

}

export default new ProgramsPage();