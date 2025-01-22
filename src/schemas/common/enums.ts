import { z } from 'zod';
import {
  CalculateLoanInterestLoanTypeEnum,
  CurrencyEnum,
  IncorporationCountryEnum,
  LoanResponseLoanStatusEnum,
  NewLoanInterestAllocationTypeEnum,
  NewLoanRepaymentTypeEnum,
  PurchaseStatus,
} from 'generated/data-contracts';

export const CurrencyEnumSchema = z.nativeEnum(CurrencyEnum);

export const PurchaseStatusEnumSchema = z.nativeEnum(PurchaseStatus);

export const CountryCodeEnumSchema = z.nativeEnum(IncorporationCountryEnum);

export const PenaltyTypeEnumSchema = z.nativeEnum({
  // ...NewLoanPenaltyTypeEnum,
  FIXED: 'Fixed',
  VARIABLE: 'Variable',
});

export const LoanStatusEnumSchema = z.nativeEnum({
  ...LoanResponseLoanStatusEnum,
  Canceled: 'Canceled',
  DefaultProvisioning: 'Default provisioning',
});

export const LoanTypeEnumSchema = z.nativeEnum(CalculateLoanInterestLoanTypeEnum);
export const LoanTypeRepaymentEnumSchema = z.nativeEnum(NewLoanRepaymentTypeEnum);
export const LoanInterestAllocationTypeEnumSchema = z.nativeEnum(NewLoanInterestAllocationTypeEnum);
