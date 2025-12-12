import {$} from '@wdio/globals';
import Page from './page.js';   

class AboutPage extends Page {
    aboutMenuSelector(name) {
        return $(`//a[contains(text(), "${name}")]`);
    }
    arrayAboutMenuNames=[
        "About Scouting America", 
        "Advocating for Youth", 
        "Annual Report", 
        "Governance", 
        "Executive Communications",
        "Contact Scouting America", 
        "Diversity",
        "Frequently Asked Questions", 
        "Connect With Us", 
        "Local Council Locator", 
        "Membership Policy",
        "Membership Standards",
        "Research", 
        "Volunteer",
        "Why Scouting", 
        "Youth Safety"];

    aboutURLPathways(path){
        return browser.url(`${path}`);
    }    
    arrayAboutMenuLinksPaths=[
        "about/",
        "about/advocacy/",
        "about/annual-report/",
        "about/governance/",
        "about/executive-communications/",
        "about/contact-us/",
        "about/diversity/",
        "about/faq/",
        "about/follow/",
        "about/local-council-locator/",
        "about/membership-policy/",
        "about/membership-standards/",
        "about/research/",
        "about/volunteer/",
        "about/why-scouting/",
        "about/youth-safety/"];

    arraySubMenuItems = {
        annualReport:{
            carrotSelector1: $$('[class="fas fa-angle-down"]')[0],
            financialStatements: $('#menu-item-172585')
        },
        governance:{
            carrotSelector2: $$('[class="fas fa-angle-down"]')[1],
            boyScoutsofAmericaCharter: $('#menu-item-206383'),
            keyThree: $('#menu-item-206384'),
            nationalExecutiveBoard: $('#menu-item-206385'),
            boardMemberGeographic: $('#menu-item-206381'),
            retiringBoardMembers: $('#menu-item-206382'),
            boardResources: $('#menu-item-235017')
        },
        research:{
            carrotSelector3: $$('[class="fas fa-angle-down"]')[2],
            scoutingEdge: $('#menu-item-214112'),
            eagleScoutsMeritBadge: $('#menu-item-172588')
        },
        youthSafety:{
            carrotSelector4: $$('[class="fas fa-angle-down"]')[3],
            adultLeaderSelection: $('#menu-item-172589'),
            ourCommitment: $('#menu-item-172590')
        }
    }


    get aboutDropdn() {
        return $('#menu-item-197545');
    }
    get advocatingForYouthDropdn() {
        return $('#menu-item-236109');
    }
    get AnnualReportDropdn() {
        return $('#menu-item-171430');
    }
    get firstDropdncarrot() {
    return $$('[class="fas fa-angle-down"]')[0];
    }
    get FinancialStmtsDropdn() {
        return $('#menu-item-172585');
    }
    get GovernanceDropdn() {
        return $('#menu-item-206380');
    }
    get secondDropdncarrot() {
    return $$('[class="fas fa-angle-down"]')[1];
    }
    get BoyScoutsofAmericaCharterDropdn() {
        return $('#menu-item-206383');
    }
    get KeyThreeDropdn() {
        return $('#menu-item-206384');
    }
    get NationalExecutiveBoardDropdn() {
        return $('#menu-item-206385');
    }
    get BoardMemberGeographicDropdn() {
        return $('#menu-item-206381');
    }
    get RetiringBoardMembersDropdn() {
        return $('#menu-item-206382');
    }
    get BoardResourcesDropdn() {
        return $('#menu-item-235017');
    }
    get ExecutiveCommmDropdn() {
        return $('#menu-item-214803');
    }
    get ContactScoutingDropdn() {
        return $('#menu-item-171387');
    }
    get DiversityDropdn() {
        return $('#menu-item-171478');
    }
    get FAQsDropdn() {
        return $('#menu-item-171486');
    }
    get ConnectWithUsDropdn() {
        return $('#menu-item-171391');
    }
    get LocalCouncilDropdn() {
        return $('#menu-item-172583');
    }
    get MembershipPolicyDropdn() {
        return $('#menu-item-172584');
    }
    get MembershipStandardsDropdn() {
        return $('#menu-item-171245');
    }
    get ResearchDropdn() {
        return $('#menu-item-171244');
    }
    get thirdDropdncarrot() {
    return $$('[class="fas fa-angle-down"]')[2];
    }
    get ScoutingEdgeDropdn() {
        return $('#menu-item-214112');
    }
    get EagleScoutsMeritDropdn() {
        return $('#menu-item-172588');
    }
    get VolunteerDropdn() {
        return $('#menu-item-171488');
    }
    get WhyScoutingDropdn() {
        return $('#menu-item-171487');
    }
    get YouthSafetyDropdn() {
        return $('#menu-item-171483');
    }
    get fourthDropdncarrot() {
    return $$('[class="fas fa-angle-down"]')[3];
    }
    get AdultLeaderSelectionDropdn() {
        return $('#menu-item-172589');
    }
    get OurCommitmentDropdn() {
        return $('#menu-item-172590');
    }
}    

export default new AboutPage();
