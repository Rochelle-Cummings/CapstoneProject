import {$, expect, browser} from '@wdio/globals';

class ProgramsPage {
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
        return $('[data-id="10728773"]');
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

    async openAndCloseTest(){
        await browser.url('programs/');

        await this.venturingDropdown.click();
        await expect(this.venturingOpenParagraph).toBeDisplayed();
        await expect(this.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(this.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(this.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();

        await this.scoutsBSADropdown.click();
        await expect(this.scoutsBSAOpenParagraph).toBeDisplayed();
        await expect(this.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(this.venturingOpenParagraph).not.toBeDisplayed();
        await expect(this.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();

        await this.cubScoutingDropdown.click();
        await expect(this.cubScoutingOpenparagraph).toBeDisplayed();
        await expect(this.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(this.venturingOpenParagraph).not.toBeDisplayed();
        await expect(this.seaScoutsOpenParagraph).not.toBeDisplayed();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();

        await this.seaScoutsDropdown.click();
        await expect(this.seaScoutsOpenParagraph).toBeDisplayed();
        await expect(this.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(this.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(this.venturingOpenParagraph).not.toBeDisplayed();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();
  
        await this.exploringDropdown.click();
        await expect(this.exploringOpenParagraph).toBeDisplayed();
        await expect(this.cubScoutingOpenparagraph).not.toBeDisplayed();
        await expect(this.scoutsBSAOpenParagraph).not.toBeDisplayed();
        await expect(this.venturingOpenParagraph).not.toBeDisplayed();
        await expect(this.seaScoutsOpenParagraph).not.toBeDisplayed();
        await this.cubScoutingDropdown.click();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();
    }
    
    async searchFilterTest(){
        await browser.url('programs/');
        await this.programsSearch.click();
        await this.gradeK_FiveOption.click();
        await this.programSearchButton.click();
        await expect(this.cubScoutingOpenparagraph).toBeDisplayed();
        await expect(this.scoutsBSADropdown).not.toBeDisplayed();
        await expect(this.venturingDropdown).not.toBeDisplayed();
        await expect(this.seaScoutsDropdown).not.toBeDisplayed();
        await expect(this.exploringDropdown).not.toBeDisplayed();
        await this.programsSearch.click();
        await this.ageTen_FourteenOption.click();
        await this.programSearchButton.click();
        await expect(this.scoutsBSADropdown).toBeDisplayed();
        await expect(this.exploringDropdown).toBeDisplayed();
        await expect(this.cubScoutingDropdown).not.toBeDisplayed();
        await expect(this.venturingDropdown).not.toBeDisplayed();
        await expect(this.seaScoutsDropdown).not.toBeDisplayed();
        await this.programsSearch.click();
        await this.ageFourteen_TwentyOption.click();
        await this.programSearchButton.click();
        await expect(this.scoutsBSADropdown).toBeDisplayed();
        await expect(this.venturingDropdown).toBeDisplayed();
        await expect(this.seaScoutsDropdown).toBeDisplayed();
        await expect(this.exploringDropdown).toBeDisplayed();
        await expect(this.cubScoutingDropdown).not.toBeDisplayed();
        await this.programsSearch.click();
        await this.allAgesOption.click();
        await this.programSearchButton.click();
        await expect(this.cubScoutingOpenparagraph).toBeDisplayed();
        await expect(this.scoutsBSADropdown).toBeDisplayed();
        await expect(this.venturingDropdown).toBeDisplayed();
        await expect(this.seaScoutsDropdown).toBeDisplayed();
        await expect(this.exploringDropdown).toBeDisplayed();
    }
    async doubleClickTest(){
        await browser.url('programs/');
        await this.scoutsBSADropdown.click();
        await this.scoutsBSADropdown.click();
        await expect(this.scoutsBSAOpenParagraph).not.toBeDisplayed();
    
        await this.cubScoutingDropdown.click();
        await this.cubScoutingDropdown.click();
        await expect(this.cubScoutingOpenparagraph).not.toBeDisplayed();
       
        await this.venturingDropdown.click();
        await this.venturingDropdown.click();
        await expect(this.venturingOpenParagraph).not.toBeDisplayed();
        
        await this.seaScoutsDropdown.click();
        await this.seaScoutsDropdown.click();
        await expect(this.seaScoutsOpenParagraph).not.toBeDisplayed();
       
        await this.exploringDropdown.click();
        await this.exploringDropdown.click();
        await expect(this.exploringOpenParagraph).not.toBeDisplayed();
    }
}

export default new ProgramsPage();