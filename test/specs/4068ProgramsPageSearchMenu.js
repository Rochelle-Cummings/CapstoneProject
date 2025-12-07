import {expect, browser} from '@wdio/globals';
import ProgramsPage from '../pageobjects/programs.page.js';

// describe('Programs Page Search menu items filter results correctly', () => {
//     it('Filters each correctly', async () => {
//         await browser.url('programs/');
//         await ProgramsPage.programsSearch.click();
//         await ProgramsPage.gradeK_FiveOption.click();
//         await ProgramsPage.programSearchButton.click();
//         await expect(ProgramsPage.cubScoutingOpenparagraph).toBeDisplayed();
//         await expect(ProgramsPage.scoutsBSADropdown).not.toBeDisplayed();
//         await expect(ProgramsPage.venturingDropdown).not.toBeDisplayed();
//         await expect(ProgramsPage.seaScoutsDropdown).not.toBeDisplayed();
//         await expect(ProgramsPage.exploringDropdown).not.toBeDisplayed();
//         await ProgramsPage.programsSearch.click();
//         await ProgramsPage.ageTen_FourteenOption.click();
//         await ProgramsPage.programSearchButton.click();
//         await expect(ProgramsPage.scoutsBSADropdown).toBeDisplayed();
//         await expect(ProgramsPage.exploringDropdown).toBeDisplayed();
//         await expect(ProgramsPage.cubScoutingDropdown).not.toBeDisplayed();
//         await expect(ProgramsPage.venturingDropdown).not.toBeDisplayed();
//         await expect(ProgramsPage.seaScoutsDropdown).not.toBeDisplayed();
//         await ProgramsPage.programsSearch.click();
//         await ProgramsPage.ageFourteen_TwentyOption.click();
//         await ProgramsPage.programSearchButton.click();
//         await expect(ProgramsPage.scoutsBSADropdown).toBeDisplayed();
//         await expect(ProgramsPage.venturingDropdown).toBeDisplayed();
//         await expect(ProgramsPage.seaScoutsDropdown).toBeDisplayed();
//         await expect(ProgramsPage.exploringDropdown).toBeDisplayed();
//         await expect(ProgramsPage.cubScoutingDropdown).not.toBeDisplayed();
//         await ProgramsPage.programsSearch.click();
//         await ProgramsPage.allAgesOption.click();
//         await ProgramsPage.programSearchButton.click();
//         await expect(ProgramsPage.cubScoutingOpenparagraph).toBeDisplayed();
//         await expect(ProgramsPage.scoutsBSADropdown).toBeDisplayed();
//         await expect(ProgramsPage.venturingDropdown).toBeDisplayed();
//         await expect(ProgramsPage.seaScoutsDropdown).toBeDisplayed();
//         await expect(ProgramsPage.exploringDropdown).toBeDisplayed();

//     })
// })
