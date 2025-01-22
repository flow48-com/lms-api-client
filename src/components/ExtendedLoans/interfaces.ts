import { NewLoan } from 'generated/data-contracts';

export type TValidatePaymentLinkRequest = Partial<TOzowPaymentRequestFormData>;
export type TNewLoan = Omit<NewLoan, 'loanType' | 'penaltyType'> & {
  loanType: TLoanTypeEnumSchema;
  penaltyType: TPenaltyTypeEnumSchema;
  name: string;
  interestAmount: number;
  annualRate: string;
  disbursementMethod: string;
};
