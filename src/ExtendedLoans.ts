import { Loans } from 'generated/Loans';
import { HttpClient, RequestParams } from 'generated/http-client';
import { LoanRevioDisbursementsResponse } from 'integrations/schemas/loans-old';

class ExtendedLoans {
  private loans: Loans;

  constructor(httpClient: HttpClient) {
    this.loans = new Loans(httpClient);
  }

  // This method should pe implemented in API docs now is missed
  getRevioDisbursements = (loanId: string, params?: RequestParams) => {
    return this.loans.http.request<LoanRevioDisbursementsResponse>({
      path: `/loans/${loanId}/revioDisbursements`,
      method: 'GET',
      query: {
        loanId,
      },
      secure: true,
      format: 'json',
      ...params,
    });
  };
}

export default ExtendedLoans;
