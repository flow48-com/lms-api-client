import { Dashboard } from 'generated/Dashboard';
import { DisbursementRequests } from 'generated/DisbursementRequests';
import { Instalments } from 'generated/Instalments';
import { Schedule } from 'generated/Schedule';
import { TimeMachine } from 'generated/TimeMachine';
import { ExtendedCompanies } from 'components/ExtendedCompanies';
import { ExtendedLoans } from 'components/ExtendedLoans';
import ExtendedHttpClient from 'clients/ExtendedHttpClient';
import { ApiConfig } from 'generated/http-client';
export declare class LmsApiClient {
    httpClient: ExtendedHttpClient;
    companies: ExtendedCompanies;
    dashboard: Dashboard;
    disbursementRequests: DisbursementRequests;
    instalments: Instalments;
    loans: ExtendedLoans;
    schedule: Schedule;
    timeMachine: TimeMachine;
    constructor(clientConfig: ApiConfig);
}
//# sourceMappingURL=LmsApiClient.d.ts.map