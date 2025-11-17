import {browser} from '@wdio/globals';

export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /login)
     */
    open (path) {
        return browser.url(`https://scouting.org/${path}`);
    }
}