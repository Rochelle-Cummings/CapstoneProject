import {$} from '@wdio/globals';
import Page from './page.js';   

class AboutPage extends Page {
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
