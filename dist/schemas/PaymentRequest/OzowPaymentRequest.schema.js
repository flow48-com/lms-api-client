import { CurrencyEnumSchema } from 'schemas/common/enums';
import { todayDate } from 'utils/helper';
export const initPaymentRequestFormData = {
    amount: 0,
    currency: CurrencyEnumSchema.enum.ZAR,
    expirationDate: todayDate,
};
