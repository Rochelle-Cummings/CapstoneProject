import Page from './page.js';

class HomePage extends Page {
 
    async getStarted() {
        this.open(); 
    }
}

export default new HomePage();
