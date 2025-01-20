import { NewLoan } from 'generated/data-contracts';
import {
  TLoanTypeEnumSchema,
  TPenaltyTypeEnumSchema,
} from 'integrations/schemas/common/interfaces';
import { TOzowPaymentRequestFormData } from 'pages/DetailedLoan/components/PaymentInformation/components/OzowPaymentLinkRequests/components/CreatePaymentRequest/OzowPaymentRequest.types';

export type TValidatePaymentLinkRequest = Partial<TOzowPaymentRequestFormData>;
export type TNewLoan = Omit<NewLoan, 'loanType' | 'penaltyType'> & {
  loanType: TLoanTypeEnumSchema;
  penaltyType: TPenaltyTypeEnumSchema;
  name: string;
  interestAmount: number;
  annualRate: string;
  disbursementMethod: string;
};
