import { HttpClient } from 'generated/http-client';
import { Dashboard } from 'generated/Dashboard';
import { DisbursementRequests } from 'generated/DisbursementRequests';
import { Instalments } from 'generated/Instalments';
import { Schedule } from 'generated/Schedule';
import { TimeMachine } from 'generated/TimeMachine';
import { ExtendedCompanies } from 'components/ExtendedCompanies';
import { ExtendedLoans } from 'components/ExtendedLoans';
import ExtendedHttpClient from 'clients/ExtendedHttpClient';

export class LmsApiClient {
  companies: ExtendedCompanies;
  dashboard: Dashboard;
  disbursementRequests: DisbursementRequests;
  instalments: Instalments;
  loans: ExtendedLoans;
  schedule: Schedule;
  timeMachine: TimeMachine;

  constructor(httpClient: ExtendedHttpClient) {
    this.companies = new ExtendedCompanies(httpClient);
    this.dashboard = new Dashboard(httpClient);
    this.disbursementRequests = new DisbursementRequests(httpClient);
    this.instalments = new Instalments(httpClient);
    this.loans = new ExtendedLoans(httpClient);
    this.schedule = new Schedule(httpClient);
    this.timeMachine = new TimeMachine(httpClient);
  }
}
