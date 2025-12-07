import {expect, browser} from '@wdio/globals';
import ProgramsPage from '../pageobjects/programs.page.js';

describe('Programs Page Open and Collapse menus', () => {
    it('Opens and collapses each menu correctly', async () => {
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
    })
})    
describe('Programs Page menus collapse when clicked twice', () => {
    it('Collapses each menu when clicked twice', async () => {
        await browser.url('programs/');
        await ProgramsPage.scoutsBSADropdown.click();
        await ProgramsPage.scoutsBSADropdown.click();
        await expect(ProgramsPage.scoutsBSAOpenParagraph).not.toBeDisplayed();
    
        await ProgramsPage.cubScoutingDropdown.click();
        await ProgramsPage.cubScoutingDropdown.click();
        await expect(ProgramsPage.cubScoutingOpenparagraph).not.toBeDisplayed();
       
        await ProgramsPage.venturingDropdown.click();
        await ProgramsPage.venturingDropdown.click();
        await expect(ProgramsPage.venturingOpenParagraph).not.toBeDisplayed();
        
        await ProgramsPage.seaScoutsDropdown.click();
        await ProgramsPage.seaScoutsDropdown.click();
        await expect(ProgramsPage.seaScoutsOpenParagraph).not.toBeDisplayed();
       
        await ProgramsPage.exploringDropdown.click();
        await ProgramsPage.exploringDropdown.click();
        await expect(ProgramsPage.exploringOpenParagraph).not.toBeDisplayed();
    })
})    
        