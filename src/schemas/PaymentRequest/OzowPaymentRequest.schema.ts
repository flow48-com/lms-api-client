import { CurrencyEnumSchema } from 'schemas/common/enums';
import { todayDate } from 'utils/helper';

export const initPaymentRequestFormData = {
  amount: 0,
  currency: CurrencyEnumSchema.enum.ZAR,
  expirationDate: todayDate,
};

export type TOzowPaymentRequestFormData = typeof initPaymentRequestFormData;

export type TOzowPaymentRequest = {
  formData: TOzowPaymentRequestFormData;
  params: URLSearchParams;
};
