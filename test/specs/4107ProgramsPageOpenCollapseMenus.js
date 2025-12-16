import {expect, browser} from '@wdio/globals';
import ProgramsPage from '../pageobjects/programs.page.js';

describe('Programs Page Open and Collapse menus', () => {
    it('Opens and collapses each menu correctly', async () => {
        await ProgramsPage.openAndCloseTest();
    })
})    
describe('Programs Page menus collapse when clicked twice', () => {
    it('Collapses each menu when clicked twice', async () => {
        await ProgramsPage.doubleClickTest();
    })
})    
        