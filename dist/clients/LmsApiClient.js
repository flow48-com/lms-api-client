import { Dashboard } from 'generated/Dashboard';
import { DisbursementRequests } from 'generated/DisbursementRequests';
import { Instalments } from 'generated/Instalments';
import { Schedule } from 'generated/Schedule';
import { TimeMachine } from 'generated/TimeMachine';
import { ExtendedCompanies } from 'components/ExtendedCompanies';
import { ExtendedLoans } from 'components/ExtendedLoans';
import ExtendedHttpClient from 'clients/ExtendedHttpClient';
export class LmsApiClient {
    httpClient;
    companies;
    dashboard;
    disbursementRequests;
    instalments;
    loans;
    schedule;
    timeMachine;
    constructor(clientConfig) {
        this.httpClient = new ExtendedHttpClient(clientConfig);
        this.companies = new ExtendedCompanies(this.httpClient);
        this.dashboard = new Dashboard(this.httpClient);
        this.disbursementRequests = new DisbursementRequests(this.httpClient);
        this.instalments = new Instalments(this.httpClient);
        this.loans = new ExtendedLoans(this.httpClient);
        this.schedule = new Schedule(this.httpClient);
        this.timeMachine = new TimeMachine(this.httpClient);
    }
}
