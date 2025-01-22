export declare const initPaymentRequestFormData: {
    amount: number;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    expirationDate: string;
};
export type TOzowPaymentRequestFormData = typeof initPaymentRequestFormData;
export type TOzowPaymentRequest = {
    formData: TOzowPaymentRequestFormData;
    params: URLSearchParams;
};
//# sourceMappingURL=OzowPaymentRequest.schema.d.ts.map