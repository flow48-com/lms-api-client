import { NewLoan } from 'generated/data-contracts';
import { TLoanTypeEnumSchema, TPenaltyTypeEnumSchema } from 'schemas/common/interfaces';
import { TOzowPaymentRequestFormData } from 'schemas/PaymentRequest/OzowPaymentRequest.schema';

export type TValidatePaymentLinkRequest = Partial<TOzowPaymentRequestFormData>;
export type TNewLoan = Omit<NewLoan, 'loanType' | 'penaltyType'> & {
  loanType: TLoanTypeEnumSchema;
  penaltyType: TPenaltyTypeEnumSchema;
  name: string;
  interestAmount: number;
  annualRate: string;
  disbursementMethod: string;
};
