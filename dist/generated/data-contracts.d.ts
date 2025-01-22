/** Currency */
export declare enum CurrencyEnum {
    USD = "USD",
    ZAR = "ZAR",
    AED = "AED"
}
/** The country in which the business was incorporated */
export declare enum IncorporationCountryEnum {
    EG = "EG",
    JO = "JO",
    SA = "SA",
    AE = "AE",
    ES = "ES",
    ZA = "ZA"
}
/**
 * The credit score associated to the customer
 * @example 1
 */
export declare enum CreditScoreEnum {
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
    Value4 = 4,
    Value5 = 5,
    Value6 = 6,
    Value7 = 7,
    Value8 = 8
}
export interface MetaData {
    /** Number of items */
    itemsCount?: number;
    /** Limit of items per page */
    limit?: number;
    /** Current page number */
    page?: number;
}
/**
 * Internal risk associated with the customer
 * @example "LOW"
 */
export declare enum InternalRisk {
    VERY_HIGH = "VERY_HIGH",
    HIGH = "HIGH",
    NEUTRAL = "NEUTRAL",
    LOW = "LOW"
}
export declare enum OrderByEnum {
    Asc = "asc",
    Desc = "desc"
}
export interface LoanStats {
    /**
     * Number of late loans
     * @example 0
     */
    late?: number;
    /**
     * Number of loans in default review status
     * @example 11
     */
    defaultReview?: number;
    /**
     * Number of loans in default provision status
     * @example 8
     */
    defaultProvision?: number;
    /**
     * Number of overdue loans
     * @example 4
     */
    overdue?: number;
    /**
     * Number of loans waiting for disbursement
     * @example 27
     */
    waitingDisbursement?: number;
}
export interface NewCompany {
    /**
     * Company Legal Name
     * @example "My Company Inc"
     */
    companyLegalName: string;
    /** The country in which the business was incorporated */
    incorporationCountry: IncorporationCountryEnum;
    /**
     * The date on which the company was incorporated. A date in ISO-8601 format (YYYY-MM-DD)
     * @example "2023-01-01T00:00:00.000Z"
     */
    incorporationDate: string;
    /**
     * Type of legal entity
     * @example "LLC"
     */
    companyType: string;
    /**
     * Industry of the company
     * @example "RETAIL"
     */
    industry?: string;
    /**
     * Indicates if the company is a partner
     * @example false
     */
    isPartner?: boolean;
    /**
     * The partner to which this company belongs
     * @example "Partner Company Inc EG"
     */
    partnerCompanyIdentifier?: string;
    /**
     * Contact email for company
     * @example "user@example.com"
     */
    email: string;
    /**
     * Contact phone for customer
     * @example "+20961234567"
     */
    phone: string;
    /**
     * Website for this customer
     * @example "https://flow48.com"
     */
    website?: string;
    /**
     * Name of the contact associated with this company
     * @example "John Doe"
     */
    contactName: string;
    /**
     * The owner is the Sales team member managing the relationship with the client
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    loanOfficerUserId: string;
    /**
     * The credit limit associated with the customer
     * @example 100000
     */
    creditLimit: number;
    /**
     * Credit limit associated with the IBF product
     * @example 50000
     */
    ibfCreditLimit?: number;
    /** Currency */
    currency?: CurrencyEnum;
    /**
     * Credit limit associated with the IBF product
     * @example 50000
     */
    rbfCreditLimit?: number;
    /** The credit score associated to the customer */
    creditScore: CreditScoreEnum;
    /**
     * Date of which the customer needs next risk review
     * @example "2029-01-01T00:00:00.000Z"
     */
    nextReviewDate: string;
    /**
     * Indicates if the company has compliance approved
     * @example true
     */
    isComplianceApproved: boolean;
    /**
     * Next date when compliance is due
     * @example "2029-01-01T00:00:00.000Z"
     */
    nextComplianceReviewDate: string;
    /**
     * Name of the company bank
     * @example "Dark Empire Bank"
     */
    bankName: string;
    /**
     * IBAN code of the company bank
     * @example "EG800002000156789012345180002"
     */
    iban: string;
    /**
     * SWIFT code for the company bank
     * @example "BBBBJO33YYY"
     */
    swift: string;
    /**
     * Address of company's bank
     * @example "Coruscant street 6"
     */
    bankAddress: string;
    /**
     * The bank account number
     * @example 1234567
     */
    accountNumber?: string;
    /**
     * The bank branch code
     * @example 123456
     */
    branchCode?: string;
    /** Internal risk associated with the customer */
    internalRisk?: InternalRisk;
}
export type CompanyResponse = (NewCompany & object) & {
    /**
     * Unique company identifier
     * @example "My Company Inc EG"
     */
    companyIdentifier?: string;
    /** @example "Direct" */
    companySourceType?: CompanyResponseCompanySourceTypeEnum;
    /**
     * The difference between Credit Limit and Utilized Credit
     * @example 100000
     */
    limitGap?: number;
    /**
     * The credit utilized by the customer, the value of the credits - total principal repayments
     * @example 100000
     */
    utilizedCredit?: number;
    /**
     * The IBF credit utilized by the customer
     * @example 100000
     */
    utilizedIbfCredit?: number;
    /**
     * The IBRBFF credit utilized by the customer
     * @example 100000
     */
    utilizedRbfCredit?: number;
    /**
     * Date and time when company was added in system
     * @example "2023-05-06T23:44:08.209Z"
     */
    createdAt?: string;
    /**
     * Date and time when company was last updated
     * @example "2023-05-06T23:44:08.209Z"
     */
    updatedAt?: string;
    /**
     * Who the company was last updated by
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    updatedByUserId?: string;
    loanOfficerUser?: LoanOfficerUser;
    /**
     * Additional company attributes
     * @example {"attributeName":"attribute Value"}
     */
    attributes?: object;
};
export interface SalesforceUser {
    /** @example "0052v00000B8Z3AAAV" */
    Id?: string;
    /** @example "John Doe" */
    Name?: string;
    /** @example "sales@flow48.com" */
    Email?: string;
}
export interface Account {
    /** @example "0012v00002J5Z3AAAV" */
    Id?: string;
    /** @example "My Company Inc EG" */
    Company_Identifier__c?: string;
    /** @example "My Company Inc EG" */
    Name?: string;
    /** @example "https://flow48.com" */
    Website?: string;
    /** The country in which the business was incorporated */
    IncorporationCountry__c?: IncorporationCountryEnum;
    /** @example "LLC" */
    BusinessType__c?: string;
    /** @example "RETAIL" */
    Industry?: string;
    Parent?: Account;
    /** @example "contact@email.com" */
    Email__c?: string;
    /** @example "+20961234567" */
    Phone?: string;
    /** @example "John Doe" */
    ContactName__c?: string;
    /** @example "0052v00000B8Z3AAAV" */
    OwnerId?: string;
    Owner?: SalesforceUser;
    /** @example 100000 */
    CreditLimit__c?: number;
    /** @example 1 */
    CreditScore__c?: number;
    /** @example true */
    ComplianceApproved__c?: boolean;
    /** @example "Dark Empire Bank" */
    BankName__c?: string;
    /** @example "BBBBJO33YYY" */
    SWIFT__c?: string;
    /** @example "EG800002000156789012345180002" */
    IBAN__c?: string;
    /** @example "Coruscant street 6" */
    BankAddress__c?: string;
}
export interface Opportunity {
    /** @example "00B7Q00000GWcU9UAL" */
    Id?: string;
    /** @example "0012v00002J5Z3AAAV" */
    AccountId?: string;
    /** @example 100000 */
    Amount?: number;
    /** @example "2023-05-06T00:00:00.000Z" */
    CloseDate?: string;
    /** @example "123e4567-e89b-12d3-a456-426614174000" */
    CognitoId__c?: string;
    CreatedBy?: SalesforceUser;
    /** @example "Some description" */
    Description?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    DisbursementDate__c?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    First_Instalment_Date__c?: string;
    /** @example false */
    LmsSyncIssues__c?: boolean;
    /** @example "https://lms.flow48.com/loan/00B7Q00000GWcU9UAL" */
    LMS_Url__c?: string;
    /** @example "My Company Inc EG" */
    Name?: string;
    Owner?: SalesforceUser;
    /** @example 3 */
    Penalty__c?: number;
    /** @example "InvoiceDiscounting" */
    Product__c?: string;
    /** @example 15 */
    RateOffered__c?: number;
    /** @example "end_of_tenor" */
    Repayment_Type__c?: string;
    /** @example "Closed Won" */
    StageName?: string;
    /** @example 60 */
    Tenor__c?: string;
}
export interface Offer {
    /** @example "00B7Q00000GWcU9UAL" */
    Id?: string;
    /** @example 100000 */
    Loan_Amount__c?: number;
    /** @example "My Company Inc EG" */
    Name?: string;
    /** @example "IBF" */
    Product__c?: string;
    /** @example 15 */
    Rate__c?: number;
    /** @example "Active" */
    Status__c?: string;
    /** @example 60 */
    Tenor__c?: string;
    /** @example "Some request" */
    User_Request__c?: string;
}
export type LoanResponse = (NewLoan & object) & {
    loanOfficerUser?: LoanOfficerUser;
    /**
     * Unique loan identifier
     * @example "BtCSNcteA2oD226"
     */
    loanId?: string;
    /**
     * Loan current status
     * @example "Pending"
     */
    loanStatus?: LoanResponseLoanStatusEnum;
    /**
     * The date finance team transfers the funds to the client
     * @example "2023-05-06T00:00:00.000Z"
     */
    disbursementDate?: string;
    /**
     * The date on which the loan is due for final repayment
     * @example "2024-05-06T00:00:00.000Z"
     */
    maturityDate?: string;
    /** Currency */
    currency?: CurrencyEnum;
    /**
     * Date of which the loan is  actually paid off
     * @example "2024-12-06T00:00:00.000Z"
     */
    payoffDate?: string;
    /**
     * Date the loan was approved
     * @example "2023-12-06T00:00:00.000Z"
     */
    loanApprovalDate?: string;
    /**
     * How many times the loan has been deliquent
     * @example 0
     */
    timesDelinquent?: number;
    /**
     * The principal left to be paid
     * @example 0
     */
    netPayablePrincipal?: number;
    /**
     * Late payment fees for this loan
     * @example 0
     */
    netPayablePenalties?: number;
    /**
     * Total left sum of pricnipal, interest, penalties amount
     * @example 0
     */
    netPayableTotal?: number;
    /**
     * Total left sum of interest amount
     * @example 0
     */
    netPayableInterest?: number;
    /**
     * Maximum allowable disbursements including offset
     * @example 0
     */
    maxAllowableDisbursements?: number;
    /**
     * The total money disbursed to the customer
     * @example 0
     */
    totalDisbursedAmount?: number;
    /**
     * Total Principal paid by the customer
     * @example 0
     */
    paidPrincipalAmount?: number;
    /**
     * Total interest paid by the customer
     * @example 0
     */
    paidInterestAmount?: number;
    /**
     * Total penalties paid by the customer
     * @example 0
     */
    paidPenaltiesAmount?: number;
    /**
     * Late payment fees for this loan
     * @example 0
     */
    totalPenaltyAmount?: number;
    /**
     * Total offsets for the loan
     * @example 0
     */
    totalOffsetAmount?: number;
    /**
     * Total amount waived off
     * @example 0
     */
    waivedAmount?: number;
    /**
     * Penalty amount waived off
     * @example 0
     */
    waivedPenaltyAmount?: number;
    /**
     * Total interest adjusted
     * @example 0
     */
    adjustedInterestAmount?: number;
    /**
     * Total interest discounted
     * @example 0
     */
    allocatedDiscountInterestAmount?: number;
    /**
     * Principal Amount Written off; this is the amount considered not recoverable
     * @example 0
     */
    writtenOffPrincipalAmount?: number;
    /**
     * Interests Amount Written off; this is the amount considered not recoverable
     * @example 0
     */
    writtenOffInterestAmount?: number;
    /**
     * Total Amount Written off; this is the amount considered not recoverable
     * @example 0
     */
    totalWrittenOffAmount?: number;
    /**
     * This is the amount which was  restructured as part of a different loan
     * @example 0
     */
    restructuredAmount?: number;
    /**
     * The amount of interest
     * @example 1500
     */
    interestAmount?: number;
    /**
     * Date of next payment
     * @example "2023-05-06T00:00:00.000Z"
     */
    nextPaymentDate?: string;
    /**
     * Number of payments equal to 1 month
     * @example 12
     */
    numberOfPayments?: number;
    /**
     * Number of current payment
     * @example 0
     */
    currentPaymentNumber?: number;
    /**
     * Current delinquent amount of loan
     * @example 0
     */
    delinquentAmount?: number;
    /**
     * Origination fee
     * @example 0
     */
    originationFee?: number;
    /**
     * Origination fee amount
     * @example 0
     */
    originationFeeAmount?: number;
    /**
     * Origination fee amount
     * @example 0
     */
    totalChargesAmount?: number;
};
export interface DisbursementRequestResponse {
    /**
     * Disbursement Request ID.
     * @example "DRMYcrC9orZztiwQp"
     */
    disbursementRequestId?: string;
    /**
     * Loan ID to which Disbursement Request refers.
     * @example "DRMYcrC9orZztiwQp"
     */
    loanId?: string;
    /**
     * Loan Name
     * @example "My Company Inc EG"
     */
    loanName?: string;
    /**
     * Company Identifier
     * @example 123456
     */
    companyIdentifier?: string;
    /**
     * Company Legal Name
     * @example "My Company Inc"
     */
    companyLegalName?: string;
    /**
     * Salesforce Account ID
     * @example 123456
     */
    salesforceAccountId?: string;
    /**
     * Requested disbursement amount
     * @example "1000.0"
     */
    amount?: string;
    /** Currency */
    currency?: CurrencyEnum;
    /**
     * Requested disbursement date
     * @example "2024-08-29"
     */
    paymentDate?: string;
    /**
     * Datetime when request has been requested
     * @example "2024-07-01 12:00:00"
     */
    requestedOn?: string;
    requestedBy?: LoanOfficerUser;
    /**
     * Disbursement Request Status
     * @example "NEW"
     */
    status?: DisbursementRequestResponseStatusEnum;
    /**
     * Disbursement Request Status
     * @example "Normal"
     */
    priority?: DisbursementRequestResponsePriorityEnum;
    /**
     * Datetime when request has been approved
     * @example "2024-07-01 12:00:00"
     */
    approvedOn?: string;
    approvedBy?: LoanOfficerUser;
    /**
     * Datetime when request has been canceled
     * @example "2024-07-01 12:00:00"
     */
    canceledOn?: string;
    canceledBy?: LoanOfficerUser;
    _links?: HalLink[];
}
export interface DisbursementBulkApproval {
    /**
     * TOTP Code
     * @example "200200"
     */
    totp?: string;
    /**
     * List of disbursement request ids to be approved
     * @example ["disbursementId1","disbursementId2"]
     */
    disbursementRequestIds?: any[];
}
export interface BulkDisbursementRequestApproveResponse {
    disbursementRequestResults?: (DisbursementRequestResponse & {
        isSuccess?: boolean;
        error?: string;
    })[];
}
export type NewDisbursementRequestResponse = (DisbursementRequestResponse & object) & {
    _embedded?: {
        loan?: LoanResponse & object;
        _links?: HalLink[];
    };
};
export interface RevioCollectionGatewayLoanDetailsSchema {
    company?: CollectionCompany;
    loan?: CollectionLoan;
    recurring_tokens?: RecurringToken[];
    purchases?: RevioPayPurchase[];
}
export interface CollectionCompany {
    /**
     * Created At
     * @format date-time
     */
    created_at?: Date;
    /**
     * Updated At
     * @format date-time
     */
    updated_at?: Date;
    /** Salesforce Account Id */
    salesforce_account_id?: string;
    /** Company Identifier */
    company_identifier?: string;
    /** Company Legal Name */
    company_legal_name?: string;
    /** Email */
    email?: string;
    /** Revio Client Id */
    revio_client_id?: string;
    client_data?: ReviopayClient;
}
export interface ReviopayClient {
    /** Created On */
    created_on?: number;
    /** Updated On */
    updated_on?: number;
    /** Email */
    email?: string;
    /** Phone */
    phone?: string;
    /** Full Name */
    full_name?: string;
    /** Personal Code */
    personal_code?: string;
    /** Street Address */
    street_address?: string;
    /** Country */
    country?: string;
    /** City */
    city?: string;
    /** Zip Code */
    zip_code?: string;
    /** State */
    state?: string;
    /** Shipping Street Address */
    shipping_street_address?: string;
    /** Shipping Country */
    shipping_country?: string;
    /** Shipping City */
    shipping_city?: string;
    /** Shipping Zip Code */
    shipping_zip_code?: string;
    /** Shipping State */
    shipping_state?: string;
    /** Cc */
    cc?: string[];
    /** Bcc */
    bcc?: string[];
    /** Legal Name */
    legal_name?: string;
    /** Brand Name */
    brand_name?: string;
    /** Registration Number */
    registration_number?: string;
    /** Tax Number */
    tax_number?: string;
    /** Bank Account */
    bank_account?: string;
    /** Bank Code */
    bank_code?: string;
    /** Client Id */
    client_id?: string;
    /** Client Type */
    client_type?: string;
}
export interface CollectionLoan {
    /** Created At */
    created_at?: string;
    /** Updated At */
    updated_at?: string;
    /** Loan Id */
    loan_id?: string;
    /** Salesforce Account Id */
    salesforce_account_id?: string;
    /** Currency */
    currency?: CurrencyEnum;
    /** Name */
    name?: string;
    /** Recurring Token Id */
    recurring_token_id?: string;
}
export interface RecurringToken {
    /** Created At */
    created_at?: string;
    /** Updated At */
    updated_at?: string;
    /** Recurring Token Id */
    recurring_token_id?: string;
    service_type?: ServiceType;
    /** Client Id */
    client_id?: string;
    status?: PurchaseStatus;
    /** Loan Id */
    loan_id?: string;
    /** Currency */
    currency?: CurrencyEnum;
    /** Name */
    name?: string;
    /** Payment Method */
    payment_method?: string;
    /** First Name */
    first_name?: string;
    /** Last Name */
    last_name?: string;
    /** Phone Number */
    phone_number?: string;
    /** Id Number */
    id_number?: string;
    /** Account Number */
    account_number?: string;
    /** Branch Code */
    branch_code?: string;
    /** Account Type */
    account_type?: string;
    /** Id Type */
    id_type?: string;
}
export declare enum PurchaseStatus {
    Created = "created",
    Sent = "sent",
    Viewed = "viewed",
    Error = "error",
    Cancelled = "cancelled",
    Overdue = "overdue",
    Expired = "expired",
    Blocked = "blocked",
    Hold = "hold",
    Released = "released",
    PendingRelease = "pending_release",
    PendingCapture = "pending_capture",
    Preauthorized = "preauthorized",
    Paid = "paid",
    PendingExecute = "pending_execute",
    PendingCharge = "pending_charge",
    Cleared = "cleared",
    Settled = "settled",
    Chargeback = "chargeback",
    PendingRefund = "pending_refund",
    Refunded = "refunded"
}
export declare enum ServiceType {
    SAMEDAY = "SAMEDAY",
    ONEDAY = "ONEDAY",
    TWODAY = "TWODAY"
}
/** Core information about the Purchase, including the products, total, currency and invoice fields. If you're using invoicing via `/billing/` or `/billing_templates/`, this object will be copied 1:1 from BillingTemplate you specify to the resulting Purchases (also to subscription Purchases). */
export interface RevioPayPurchase {
    /** Currency */
    currency?: CurrencyEnum;
    /**
     * Line items of the invoice. In case of a transaction with no invoice sent, specify a single Product forming the cost of transaction.
     * @minItems 1
     */
    products: ReviopayProduct[];
    total?: number;
    /**
     * Language code in the ISO 639-1 format (e.g. 'en')
     * @format ISO 639-1
     * @maxLength 2
     * @default "Default value is controlled in Company -> Brand section of merchant portal separately per each Brand used (default value, if no changes are made, is `en`). Brand to be used with corresponding Purchase/BillingTemplate specified using brand_id."
     */
    language?: string;
    /** @maxLength 10000 */
    notes?: string;
    /** @default 0 */
    debt?: number;
    subtotal_override?: number;
    total_tax_override?: number;
    total_discount_override?: number;
    total_override?: number;
    /**
     * ClientDetails fields to request from the client before the payment. If a value is passed for a field in ClientDetails, it will be automatically removed from this list.
     * @uniqueItems true
     * @default []
     */
    request_client_details?: RevioPayPurchaseRequestClientDetailsEnum[];
    /**
     * Timezone to localize invoice-specific timestamps in, e.g. to display a concrete date for a `due` timestamp on the invoice.
     * @format TZ database name
     * @example "Europe/Oslo"
     */
    timezone?: string;
    /**
     * Whether to permit payments when Purchase's `due` has passed. By default those are permitted (and status will be set to `overdue` once `due` moment is passed). If this is set to `true`, it won't be possible to pay for an overdue invoice, and when `due` is passed the Purchase's status will be set to `expired`.
     * @default false
     */
    due_strict?: boolean;
    /**
     * An optional message to display to your customer in invoice email, e.g. "Your invoice for June".
     * @maxLength 256
     */
    email_message?: string;
}
export interface ReviopayProduct {
    /**
     * Product name
     * @maxLength 256
     */
    name: string;
    /**
     * Quantity of these products in invoice
     * @format float
     * @min 0
     * @default 1
     */
    quantity?: string;
    price: number;
    discount?: number;
    /**
     * Percent of tax added to the price of this product
     * @format float
     * @min 0
     * @max 100
     * @default 0
     */
    tax_percent?: string;
    /**
     * Product category
     * @maxLength 256
     */
    category?: string;
}
/** RevioEftPayment */
export interface RevioEftPayment {
    /** Created At */
    created_at?: string;
    /** Updated At */
    updated_at?: string;
    /** Payment Id */
    payment_id: string;
    /** Reference Number */
    reference_number: string | null;
    /** External Reference */
    external_reference: string | null;
    /** Payment Date */
    payment_date: string | null;
    /** State */
    state: string | null;
    /** Amount Cents */
    amount_cents: number | null;
    /** Currency */
    currency: string | null;
    /** Client Id */
    client_id: string | null;
    /** Eft Payment Data */
    eft_payment_data?: object | null;
}
export interface NewPaymentLinkRequest {
    /**
     * Amount to be requested for payment
     * @example 200
     */
    amount: number;
    /**
     * Date when payment link expieres
     * @example "2000-12-21"
     */
    expirationDate?: string;
    /** Currency */
    currency: CurrencyEnum;
}
export interface NewLoan {
    /**
     * Opportunity ID in salesforce if loan came from it.
     * @example "00B7Q00000GWcU9UAL"
     */
    salesforceOpportunityId?: string;
    /**
     * The country in which the business was incorporated
     * @example "My Company Inc EG"
     */
    companyIdentifier: string;
    /**
     * The owner is the Sales team member managing the relationship with the client
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    loanOfficerUserId: string;
    /**
     * Type of the loan
     * @example "RBF"
     */
    loanType: NewLoanLoanTypeEnum;
    /**
     * The number of days the payment can be late
     * @example 3
     */
    gracePeriodDays: number;
    /**
     * The total amount of time the client is requesting funding for.
     * @example 30
     */
    tenor?: number;
    /**
     * The percent of Penalty applied to this loan if a payment is late
     * @minLength 1
     * @maxLength 100
     * @example 5
     */
    penaltyPercent: number;
    /**
     * Type of penalties
     * @example "FIXED"
     */
    penaltyType: NewLoanPenaltyTypeEnum;
    /**
     * Method of allocation of interest
     * @example "INTEREST_UPFRONT"
     */
    interestAllocationType?: NewLoanInterestAllocationTypeEnum;
    /**
     * The monthly rate for IBF or fixed fee for RBF offered to the client for each loan .
     * @minLength 1
     * @maxLength 100
     * @example 15
     */
    monthlyRate: number;
    /** @example "monthly_fixed" */
    repaymentType?: NewLoanRepaymentTypeEnum;
    /**
     * The loan amount. This is the amount that is disbursed to the customer
     * @example 10000
     */
    principalAmount: number;
    /**
     * Total amount of invoices for which the customer requests for IBF loan
     * @example 10000
     */
    invoicesAmount?: number;
    /**
     * Rate of the amount of invoices we lend out as a loan
     * @minLength 1
     * @maxLength 100
     * @example 100
     */
    invoicesDiscountRate?: number;
    /**
     * First instalment due date
     * @example "2024-05-05T00:00:00.000Z"
     */
    firstInstalmentDate?: string;
    /**
     * The collection method used for the repayments
     * @example "BANK_TRANSFER"
     */
    collectionMethod?: string;
}
/** @example {"exampleOperation":{"href":"/example"}} */
export type HalLink = Record<string, {
    href?: string;
}>;
export interface CompanyLinks {
    getCompany?: {
        /** @example "/companies/{companyId}" */
        href?: string;
    };
    getCompanies?: {
        /** @example "/companies" */
        href?: string;
    };
    createCompany?: {
        /** @example "/companies" */
        href?: string;
    };
    createLoan?: {
        /** @example "/loans" */
        href?: string;
    };
    getLoans?: {
        /** @example "/loans" */
        href?: string;
    };
    getCompanyLoans?: {
        /** @example "/companies/{companyId}/loans" */
        href?: string;
    };
    getCompanyActionLogs?: {
        /** @example "/companies/{companyId}/actionLogs" */
        href?: string;
    };
}
export interface CompaniesLinks {
    getCompanies?: {
        /** @example "/companies" */
        href?: string;
    };
    createCompany?: {
        /** @example "/companies" */
        href?: string;
    };
    createLoan?: {
        /** @example "/loans" */
        href?: string;
    };
    getLoans?: {
        /** @example "/loans" */
        href?: string;
    };
}
export interface FormFieldsResponse {
    fieldName?: string[];
}
export interface FormFieldsValidationResponse {
    /** @example "Some error" */
    fieldName?: any;
}
export interface LoanOfficerUser {
    /** @example "123e4567-e89b-12d3-a456-426614174000" */
    user_id?: string;
    /** @example "example@example.com" */
    email?: string;
}
export interface ActionLog {
    /** @example 1 */
    logId?: string;
    /**
     * Company identifier
     * @example "My Company Inc EG"
     */
    companyIdentifier?: string;
    /**
     * The ID of the entity for which the action was performed
     * @example "7j6ia3F7pcgmYox"
     */
    entityId?: string;
    /**
     * Entity type
     * @example "Company"
     */
    entityType?: string;
    /**
     * Action log data
     * @example "Company is created"
     */
    data?: string;
    /**
     * Date and time when log was added in system
     * @example "2023-05-06T23:44:08.000Z"
     */
    created_at?: string;
    loanOfficerUser?: LoanOfficerUser;
}
export interface LoanNote {
    /**
     * Note identifier
     * @example 1
     */
    noteId?: number;
    /**
     * Loan identifier
     * @example "BtCSNcteA2oD226"
     */
    loanId?: string;
    /** @example "Some note" */
    note?: string;
    user?: LoanOfficerUser;
    /**
     * Date and time when note was added in system
     * @example "2023-05-06T23:44:08.000Z"
     */
    createdAt?: string;
}
export interface NewDisbursement {
    /** @example 40000 */
    amount?: number;
    /** @example "000001" */
    documentNumber?: string;
    /** @example "Some note" */
    note?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    disbursementDate?: string;
    /** @example "2023-05-10T00:00:00.000Z" */
    firstPaymentDate?: string;
}
export interface NewDisbursementRequest {
    /** @example "2024-08-29T00:00:00.000Z" */
    paymentDate?: string;
    /** @example "NORMAL" */
    priority?: string;
}
export interface NewRepayment {
    /** @example "MONEY_RECEIVED" */
    type?: NewRepaymentTypeEnum;
    expenseCategory?: NewRepaymentExpenseCategoryEnum;
    /** @example 1000 */
    amount?: number;
    /** @example "000001" */
    documentNumber?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    paymentDate?: string;
}
export interface RevioPurchase {
    /** @example "123e4567-e89b-12d3-a456-426614174000" */
    purchase_id?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    created_on?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    due?: string;
    /** @example "2023-05-06T00:00:00.000Z" */
    issued?: string;
    /** @example "123456" */
    reference?: string;
    /** @example "123456" */
    reference_generated?: string;
    /** @example "123e4567-e89b-12d3-a456-426614174000" */
    client_id?: string;
    /** @example "123e4567-e89b-12d3-a456-426614174000" */
    brand_id?: string;
    status?: PurchaseStatus;
    /** Currency */
    payment_currency?: CurrencyEnum;
    /** @example 1000 */
    payment_amount?: number;
    /** @example 1000 */
    payment_net_amount?: number;
    /** @example 0 */
    payment_fee_amount?: number;
    /** @example "2023-05-06T00:00:00.000Z" */
    paid_on?: string;
    /** @example "PURCHASE" */
    payment_type?: string;
    purchase_data?: object;
}
export interface OzowPaymentRequest {
    /** Payment link request id */
    paymentLinkRequestId?: string;
    /** Ozow's unique identifier for the payment request. */
    paymentRequestId?: string;
    /** The merchant's reference for the transaction. */
    transactionReference?: string;
    /** The merchant's site code. */
    siteCode?: string;
    /** Country code. */
    countryCode?: string;
    /** Currency code. */
    currencyCode?: string;
    /** The transaction amount. */
    amount?: number;
    /** The bank reference. */
    bankReference?: string;
    /** Ozow optional field. Stores loan_id */
    optional1?: string;
    /** Optional field 2 */
    optional2?: string;
    /** Optional field 3 */
    optional3?: string;
    /** Optional field 4 */
    optional4?: string;
    /** Optional field 5 */
    optional5?: string;
    /** The customer’s name or identifier. */
    customer?: string;
    /** The cancel redirection url. User will be redirected if cancels the payment. */
    cancelUrl?: string;
    /** The error redirection url. User will be redirected if error occur during the payment. */
    errorUrl?: string;
    /** The cancel redirection url. User will be redirected if payment is successful. */
    successUrl?: string;
    /** Url used by ozow to notify ozow-gateway on transactions. */
    notifyUrl?: string;
    /** Whether the transaction is in test mode. */
    isTest?: string;
    /** Selected bank identifier. */
    selectedBankId?: string;
    /** Bank identifier. */
    bankId?: string;
    /** The bank account number the payment should be made to. */
    bankAccountNumber?: string;
    /** The branch code for the bank account. */
    branchCode?: string;
    /** The name to be used for the bank account. Only alphanumeric characters and spaces allowed. */
    bankAccountName?: string;
    /** The name shown on the site as the entity being paid (not in banking screens). */
    payeeDisplayName?: string;
    /** Payment will not be allowed to be made after this date. */
    expiryDateUtc?: Date;
    /** Allow the user to change the amount. */
    allowVariableAmount?: string;
    /** If AllowVariableAmount is passed through as true, this will dictate the lowest acceptable amount the user can enter. */
    variableAmountMin?: string;
    /** If AllowVariableAmount is passed through as true, this will dictate the highest acceptable amount the user can enter. */
    variableAmountMax?: string;
    customerIdentifier?: string;
    /** Customer cell number if defined */
    customerCellphoneNumber?: string;
    /** Short url requested */
    generateShortUrl?: boolean;
    /** Payment url */
    url?: string;
    /** Error message if was not able to generate payment link */
    errormessage?: string;
}
export interface ViewOzowPaymentRequests {
    paymentRequests?: OzowPaymentRequest[];
    metaData?: MetaData;
}
export interface OzowPaymentLinkRequest {
    /** Payment Link Request Id */
    id?: string;
    /** Loan_id for which payment link request is made */
    loanId?: string;
    /** Amount requested */
    amount?: number;
    /** Bank reference */
    bankReference?: string;
    /** Payment link expiry datetime */
    expiryDatetime?: Date;
    /** Payment link request datetime */
    createdAt?: Date;
    /** Ozow payment link url */
    url?: string;
    /** Error message if was not able to generate payment link */
    errorMessage?: string;
    /** Payment status */
    status?: string;
    /** Flag to indicate if reconciled on lms */
    isReconciled?: boolean;
    paymentRequest?: OzowPaymentRequest;
}
export interface ViewOzowPaymentLinkRequests {
    paymentLinkRequests?: OzowPaymentLinkRequest[];
    metaData?: MetaData;
    _links?: HalLink[];
    _embedded?: {
        loan?: LoanResponse;
    };
}
export interface ViewTransaction {
    transactions?: {
        /** Operation ID */
        operationId?: string;
        /**
         * Transaction Date
         * @format date
         */
        transactionDate?: Date;
        /** Transaction Type */
        type?: string;
        /** Transaction Amount */
        amount?: number;
        /** Principal Amount (nullable) */
        principal?: number | null;
        /** Interest Amount (nullable) */
        interest?: number | null;
        /** Penalty Amount (nullable) */
        penalty?: number | null;
        user?: LoanOfficerUser;
    }[];
    metaData?: MetaData;
    _links?: HalLink[];
    _embedded?: {
        loan?: LoanResponse;
    };
}
export interface CancelOperationRequest {
    reason?: CancelOperationRequestReasonEnum;
    note?: string;
}
export interface CancelLoanRequest {
    note?: string;
}
export interface SchedulePayments {
    entityId?: string;
    transactionType?: string;
    /** @format date */
    transactionDate?: Date;
    principalPaid?: number | null;
    interestPaid?: number | null;
    penaltyPaid?: number | null;
    totalPaid?: number | null;
    totalForecasted?: number | null;
    totalExpected?: number | null;
    principalDue?: number | null;
    interestDue?: number | null;
    penaltiesDue?: number | null;
    totalRepaymentDue?: number | null;
    isPaidLate?: boolean | null;
    isCurrentPayment?: boolean;
    overdueDays?: number | null;
    daysUntilPayment?: number | null;
    /** @format date */
    startLateDate?: Date;
    /** @format date */
    startPenaltyDate?: Date;
}
export interface LoanAccruedInterest {
    /** Month for which the interest is accrued (format YYYY-MM) */
    month: string;
    /**
     * Accrued interest for the loan in the given month
     * @format float
     */
    accruedInterest: number;
}
export interface LoanAccruedInterestResponse {
    interestAccruals?: LoanAccruedInterest[];
}
/** @example "Direct" */
export declare enum CompanyResponseCompanySourceTypeEnum {
    Partner = "Partner",
    Direct = "Direct",
    PartnerCustomer = "Partner customer"
}
/**
 * Loan current status
 * @example "Pending"
 */
export declare enum LoanResponseLoanStatusEnum {
    Pending = "Pending",
    Approved = "Approved",
    Active = "Active",
    Late = "Late",
    Overdue = "Overdue",
    DefaultReview = "Default review",
    Restructured = "Restructured",
    DefaultProvision = "Default provision",
    WrittenOff = "Written off",
    PaidOff = "Paid off"
}
/**
 * Disbursement Request Status
 * @example "NEW"
 */
export declare enum DisbursementRequestResponseStatusEnum {
    NEW = "NEW",
    APPROVED = "APPROVED",
    PAID = "PAID",
    FAILED = "FAILED",
    CANCELED = "CANCELED"
}
/**
 * Disbursement Request Status
 * @example "Normal"
 */
export declare enum DisbursementRequestResponsePriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
export declare enum RevioPayPurchaseRequestClientDetailsEnum {
    Email = "email",
    Phone = "phone",
    FullName = "full_name",
    PersonalCode = "personal_code",
    BrandName = "brand_name",
    LegalName = "legal_name",
    RegistrationNumber = "registration_number",
    TaxNumber = "tax_number",
    BankAccount = "bank_account",
    BankCode = "bank_code",
    BillingAddress = "billing_address",
    ShippingAddress = "shipping_address"
}
/**
 * Type of the loan
 * @example "RBF"
 */
export declare enum NewLoanLoanTypeEnum {
    RBF = "RBF",
    IBF = "IBF",
    IBF2 = "IBF2"
}
/**
 * Type of penalties
 * @example "FIXED"
 */
export declare enum NewLoanPenaltyTypeEnum {
    FIXED = "FIXED",
    VARIABLE = "VARIABLE"
}
/**
 * Method of allocation of interest
 * @example "INTEREST_UPFRONT"
 */
export declare enum NewLoanInterestAllocationTypeEnum {
    INTEREST_UPFRONT = "INTEREST_UPFRONT",
    SPLIT_EQUALLY = "SPLIT_EQUALLY"
}
/** @example "monthly_fixed" */
export declare enum NewLoanRepaymentTypeEnum {
    MonthlyFixed = "monthly_fixed",
    WeeklyFixed = "weekly_fixed",
    EndOfTenor = "end_of_tenor"
}
/** @example "MONEY_RECEIVED" */
export declare enum NewRepaymentTypeEnum {
    MONEY_RECEIVED = "MONEY_RECEIVED",
    EXPENSE = "EXPENSE"
}
export declare enum NewRepaymentExpenseCategoryEnum {
    BANK_CHARGE = "BANK_CHARGE",
    DISCOUNTS = "DISCOUNTS",
    WAIVED_PENALTIES = "WAIVED_PENALTIES",
    OTHER = "OTHER"
}
export declare enum CancelOperationRequestReasonEnum {
    ERROR = "ERROR",
    DISPUTE = "DISPUTE",
    OTHER = "OTHER"
}
export interface DashboardListData {
    loanStats?: LoanStats;
}
export interface GetCompaniesParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Search items by partial matching of search param */
    search?: string;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /** Fields that can be included */
    include?: IncludeEnum[];
}
export declare enum IncludeEnum {
    IncorporationDate = "incorporationDate",
    CompanyType = "companyType",
    Industry = "industry",
    IsPartner = "isPartner",
    PartnerCompany = "partnerCompany",
    Email = "email",
    Phone = "phone",
    Website = "website",
    ContactName = "contactName",
    LoanOfficerUserId = "loanOfficerUserId",
    IbfCreditLimit = "ibfCreditLimit",
    RbfCreditLimit = "rbfCreditLimit",
    CreditLimit = "creditLimit",
    CreditScore = "creditScore",
    NextReviewDate = "nextReviewDate",
    IsComplianceApproved = "isComplianceApproved",
    NextComplianceReviewDate = "nextComplianceReviewDate",
    BankName = "bankName",
    Iban = "iban",
    Swift = "swift",
    BankAddress = "bankAddress",
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt",
    UpdatedByUserId = "updatedByUserId"
}
export interface GetCompaniesData {
    companies?: CompanyResponse[];
}
export declare enum GetCompaniesParams1IncludeEnum {
    IncorporationDate = "incorporationDate",
    CompanyType = "companyType",
    Industry = "industry",
    IsPartner = "isPartner",
    PartnerCompany = "partnerCompany",
    Email = "email",
    Phone = "phone",
    Website = "website",
    ContactName = "contactName",
    LoanOfficerUserId = "loanOfficerUserId",
    IbfCreditLimit = "ibfCreditLimit",
    RbfCreditLimit = "rbfCreditLimit",
    CreditLimit = "creditLimit",
    CreditScore = "creditScore",
    NextReviewDate = "nextReviewDate",
    IsComplianceApproved = "isComplianceApproved",
    NextComplianceReviewDate = "nextComplianceReviewDate",
    BankName = "bankName",
    Iban = "iban",
    Swift = "swift",
    BankAddress = "bankAddress",
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt",
    UpdatedByUserId = "updatedByUserId"
}
export type CreateCompanyData = (CompanyResponse & object) & {
    _links?: HalLink[];
};
export type GetCompanyData = (CompanyResponse & object) & {
    _links?: CompanyLinks[];
};
export interface GetCompanyActionLogParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Field by which the records will be sorted */
    sortBy?: SortByEnum;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /**
     * Company identifier
     * @example "My Company Inc EG"
     */
    companyId: string;
}
/** Field by which the records will be sorted */
export declare enum SortByEnum {
    CreatedAt = "createdAt"
}
export type GetCompanyActionLogData = ActionLog & object;
/** Field by which the records will be sorted */
export declare enum GetCompanyActionLogParams1SortByEnum {
    CreatedAt = "createdAt"
}
export interface GetCompanyLoansParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /** Company field by which the records will be sorted */
    sortBy?: SortByEnum1;
    /** Loan fields that can be included */
    include?: IncludeEnum1[];
    /**
     * Company identifier
     * @example "My Company Inc EG"
     */
    companyId: string;
}
/** Company field by which the records will be sorted */
export declare enum SortByEnum1 {
    CompanyIdentifier = "companyIdentifier",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanType = "loanType",
    GracePeriodDays = "gracePeriodDays",
    Tenor = "tenor",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    MonthlyRate = "monthlyRate",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    PrincipalAmount = "principalAmount",
    InterestAmount = "interestAmount",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export declare enum IncludeEnum1 {
    SalesforceOpportunityId = "salesforceOpportunityId",
    LoanOfficerUserId = "loanOfficerUserId",
    GracePeriodDays = "gracePeriodDays",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export interface GetCompanyLoansData {
    loans?: LoanResponse[];
}
/** Company field by which the records will be sorted */
export declare enum GetCompanyLoansParams1SortByEnum {
    CompanyIdentifier = "companyIdentifier",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanType = "loanType",
    GracePeriodDays = "gracePeriodDays",
    Tenor = "tenor",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    MonthlyRate = "monthlyRate",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    PrincipalAmount = "principalAmount",
    InterestAmount = "interestAmount",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export declare enum GetCompanyLoansParams1IncludeEnum {
    SalesforceOpportunityId = "salesforceOpportunityId",
    LoanOfficerUserId = "loanOfficerUserId",
    GracePeriodDays = "gracePeriodDays",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export type GetAdditionCompanyFormFieldsData = FormFieldsResponse;
export interface ValidateAdditionCompanyFormFieldsData {
    selectFields?: {
        fieldName?: string[];
    };
}
export type GetCompanyBySalesforceIdData = (CompanyResponse & object) & {
    _links?: HalLink[];
};
export type PutCompanyBySalesforceIdData = (CompanyResponse & object) & {
    _links?: HalLink[];
};
export interface GetScheduleItemsParams {
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /** Fields to include in the schedule_items */
    include?: IncludeEnum2[];
    /** Loan fields that can be included */
    loan_include?: LoanIncludeEnum[];
    /**
     * Schedule items with duedate greater or equal to a given date
     * @format date
     */
    due_date__gte?: Date;
    /**
     * Schedule items with duedate less than or equal to a given date
     * @format date
     */
    due_date__lte?: Date;
    /** Schedule items with days until payment greater than or equal to a given number */
    days_until_payment__gte?: number;
    /** Schedule items with days until payment less than or equal to a given number */
    days_until_payment__lte?: number;
    /** Schedule items with overdue days greater than or equal to a given number */
    overdue_days__gte?: number;
    /** Schedule items with overdue days less than or equal to a given number */
    overdue_days__lte?: number;
}
export declare enum IncludeEnum2 {
    EntityId = "entityId",
    LoanId = "loanId",
    PrincipalPaid = "principalPaid",
    InterestPaid = "interestPaid",
    TotalPaid = "totalPaid",
    TotalExpected = "totalExpected",
    TotalForecasted = "totalForecasted",
    PenaltiesDue = "penaltiesDue",
    InstalmentTotalDueAmount = "instalmentTotalDueAmount",
    IsCurrentPayment = "isCurrentPayment",
    OverdueDays = "overdueDays",
    TransactionType = "transactionType",
    DueDate = "dueDate",
    PrincipalDue = "principalDue",
    InterestDue = "interestDue",
    TotalRepaymentDue = "totalRepaymentDue",
    LoanCurrency = "loanCurrency",
    PaidDate = "paidDate",
    PenaltyPaid = "penaltyPaid",
    StartLateDate = "startLateDate",
    StartPenaltySate = "startPenaltySate",
    DaysUntilPayment = "daysUntilPayment"
}
export declare enum LoanIncludeEnum {
    AnnualRate = "annualRate",
    CancelNote = "cancelNote",
    CompanyIdentifier = "companyIdentifier",
    Company = "company",
    Currency = "currency",
    DailyRate = "dailyRate",
    DelinquentAmount = "delinquentAmount",
    DisbursementDate = "disbursementDate",
    GracePeriodDays = "gracePeriodDays",
    InterestAmount = "interestAmount",
    LoanApprovalDate = "loanApprovalDate",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanRate = "loanRate",
    LoanStatus = "loanStatus",
    LoanType = "loanType",
    MaturityDate = "maturityDate",
    MonthlyRate = "monthlyRate",
    Name = "name",
    NetPayableInterest = "netPayableInterest",
    NetPayablePenalties = "netPayablePenalties",
    NetPayableTotal = "netPayableTotal",
    NextPaymentDate = "nextPaymentDate",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidTotalAmount = "paidTotalAmount",
    PayoffDate = "payoffDate",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    ProductVersion = "productVersion",
    RepaymentAmount = "repaymentAmount",
    RepaymentType = "repaymentType",
    SalesforceOpportunityId = "salesforceOpportunityId",
    Tenor = "tenor",
    TimesDelinquent = "timesDelinquent",
    TotalDisbursedAmount = "totalDisbursedAmount",
    TotalLossesAmount = "totalLossesAmount",
    TotalOutstandingAmount = "totalOutstandingAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    DaysTillNextPayment = "daysTillNextPayment"
}
export interface GetScheduleItemsData {
    loans?: {
        loanId?: LoanResponse;
    };
    schedule_items?: SchedulePayments[];
    metaData?: MetaData;
}
export declare enum GetScheduleItemsParams1IncludeEnum {
    EntityId = "entityId",
    LoanId = "loanId",
    PrincipalPaid = "principalPaid",
    InterestPaid = "interestPaid",
    TotalPaid = "totalPaid",
    TotalExpected = "totalExpected",
    TotalForecasted = "totalForecasted",
    PenaltiesDue = "penaltiesDue",
    InstalmentTotalDueAmount = "instalmentTotalDueAmount",
    IsCurrentPayment = "isCurrentPayment",
    OverdueDays = "overdueDays",
    TransactionType = "transactionType",
    DueDate = "dueDate",
    PrincipalDue = "principalDue",
    InterestDue = "interestDue",
    TotalRepaymentDue = "totalRepaymentDue",
    LoanCurrency = "loanCurrency",
    PaidDate = "paidDate",
    PenaltyPaid = "penaltyPaid",
    StartLateDate = "startLateDate",
    StartPenaltySate = "startPenaltySate",
    DaysUntilPayment = "daysUntilPayment"
}
export declare enum GetScheduleItemsParams1LoanIncludeEnum {
    AnnualRate = "annualRate",
    CancelNote = "cancelNote",
    CompanyIdentifier = "companyIdentifier",
    Company = "company",
    Currency = "currency",
    DailyRate = "dailyRate",
    DelinquentAmount = "delinquentAmount",
    DisbursementDate = "disbursementDate",
    GracePeriodDays = "gracePeriodDays",
    InterestAmount = "interestAmount",
    LoanApprovalDate = "loanApprovalDate",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanRate = "loanRate",
    LoanStatus = "loanStatus",
    LoanType = "loanType",
    MaturityDate = "maturityDate",
    MonthlyRate = "monthlyRate",
    Name = "name",
    NetPayableInterest = "netPayableInterest",
    NetPayablePenalties = "netPayablePenalties",
    NetPayableTotal = "netPayableTotal",
    NextPaymentDate = "nextPaymentDate",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidTotalAmount = "paidTotalAmount",
    PayoffDate = "payoffDate",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    ProductVersion = "productVersion",
    RepaymentAmount = "repaymentAmount",
    RepaymentType = "repaymentType",
    SalesforceOpportunityId = "salesforceOpportunityId",
    Tenor = "tenor",
    TimesDelinquent = "timesDelinquent",
    TotalDisbursedAmount = "totalDisbursedAmount",
    TotalLossesAmount = "totalLossesAmount",
    TotalOutstandingAmount = "totalOutstandingAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    DaysTillNextPayment = "daysTillNextPayment"
}
export interface GetLoansParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Search items by partial matching of search param */
    search?: string;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /** Company field by which the records will be sorted */
    sortBy?: SortByEnum2;
    /** Loan fields that can be included */
    include?: GetCompanyLoansParams1IncludeEnum[];
}
/** Company field by which the records will be sorted */
export declare enum SortByEnum2 {
    CompanyIdentifier = "companyIdentifier",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanType = "loanType",
    GracePeriodDays = "gracePeriodDays",
    Tenor = "tenor",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    MonthlyRate = "monthlyRate",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    PrincipalAmount = "principalAmount",
    InterestAmount = "interestAmount",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export interface GetLoansData {
    loans?: LoanResponse[];
}
/** Company field by which the records will be sorted */
export declare enum GetLoansParams1SortByEnum {
    CompanyIdentifier = "companyIdentifier",
    LoanOfficerUserId = "loanOfficerUserId",
    LoanType = "loanType",
    GracePeriodDays = "gracePeriodDays",
    Tenor = "tenor",
    PenaltyPercent = "penaltyPercent",
    PenaltyType = "penaltyType",
    MonthlyRate = "monthlyRate",
    LoanStatus = "loanStatus",
    DisbursementDate = "disbursementDate",
    MaturityDate = "maturityDate",
    PayoffDate = "payoffDate",
    LoanApprovalDate = "loanApprovalDate",
    TimesDelinquent = "timesDelinquent",
    PrincipalAmount = "principalAmount",
    InterestAmount = "interestAmount",
    TotalDisbursedAmount = "totalDisbursedAmount",
    PaidPrincipalAmount = "paidPrincipalAmount",
    PaidInterestAmount = "paidInterestAmount",
    PaidPenaltiesAmount = "paidPenaltiesAmount",
    TotalPenaltyAmount = "totalPenaltyAmount",
    CreatedAt = "createdAt"
}
export type CreateLoanData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export type GetLoanData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export interface GetLoanActionLogParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Field by which the records will be sorted */
    sortBy?: SortByEnum3;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /**
     * Loan ID
     * @example "3k3ixDhsDYLbaWt"
     */
    loanId: string;
}
/** Field by which the records will be sorted */
export declare enum SortByEnum3 {
    CreatedAt = "createdAt"
}
export type GetLoanActionLogData = ActionLog & object;
/** Field by which the records will be sorted */
export declare enum GetLoanActionLogParams1SortByEnum {
    CreatedAt = "createdAt"
}
export interface GetLoanNotesParams {
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /**
     * Loan ID
     * @example "3k3ixDhsDYLbaWt"
     */
    loanId: string;
}
export type GetLoanNotesData = LoanNote & object;
export type ApproveLoanData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export type CancelLoanData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export type TransitToDefaultProvisionData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export interface SetLoanDefaultReviewStatusPayload {
    /**
     * Note
     * @example "Some note"
     */
    note?: string;
}
export type SetLoanDefaultReviewStatusData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export interface UnsetLoanDefaultReviewStatusPayload {
    /**
     * Note
     * @example "Some note"
     */
    note?: string;
}
export type UnsetLoanDefaultReviewStatusData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export interface WriteOffLoanPayload {
    /**
     * Note
     * @example "Some note"
     */
    note?: string;
}
export type WriteOffLoanData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export interface GetLoanScheduleData {
    schedule?: SchedulePayments[];
    disbursement?: SchedulePayments;
}
export type GetLoanAccruedInterestData = LoanAccruedInterestResponse;
export type GetAdditionLoanFormFieldsData = FormFieldsResponse;
export interface ValidateAdditionLoanFormFieldsData {
    selectFields?: {
        fieldName?: string[];
    };
}
/**
 * Type of the loan
 * @example "IBF"
 */
export declare enum CalculateLoanInterestLoanTypeEnum {
    RBF = "RBF",
    IBF = "IBF",
    IBF2 = "IBF2"
}
export interface CalculateLoanInterestPayload {
    /**
     * Type of the loan
     * @example "IBF"
     */
    loanType?: CalculateLoanInterestLoanTypeEnum;
    /**
     * The total amount of time the client is requesting funding for.
     * @example 60
     */
    tenor?: number;
    /**
     * The monthly rate RBF offered to the client.
     * @minLength 1
     * @maxLength 100
     * @example 15
     */
    monthlyRate?: number;
    /**
     * The loan amount. This is the amount that is disbursed to the customer
     * @example 10000
     */
    principalAmount?: number;
}
export interface CalculateLoanInterestData {
    /**
     * The loan interest
     * @example 3000
     */
    interestAmount?: number;
}
export interface CalculateIbfLoanPrincipalPayload {
    /**
     * Rate of the amount of invoices we lend out as a loan
     * @minLength 1
     * @maxLength 100
     * @example 95
     */
    invoicesDiscountRate?: number;
    /**
     * Total amount of invoices for which the customer requests a loan
     * @example 10000
     */
    invoicesAmount?: number;
}
export interface CalculateIbfLoanPrincipalData {
    /**
     * The loan interest
     * @example 3000
     */
    interestAmount?: number;
}
export interface CalculateIbfRatesPayload {
    /**
     * Annual percentage
     * @minLength 1
     * @maxLength 100
     * @example 5.2
     */
    annualRate?: number;
    /**
     * Monthly percentage
     * @minLength 1
     * @maxLength 100
     * @example 64.2
     */
    monthlyRate?: number;
}
export interface CalculateIbfRatesData {
    /**
     * Annual percentage
     * @minLength 0
     * @maxLength 100
     * @example 5.2
     */
    annualRate?: number;
    /**
     * Monthly percentage
     * @minLength 0
     * @maxLength 100
     * @example 64.2
     */
    monthlyRate?: number;
    /**
     * Daily percentage
     * @minLength 0
     * @maxLength 100
     * @example 0.17
     */
    dailyRate?: number;
}
export type GetPaymentLinkRequestsData = ViewOzowPaymentLinkRequests;
export type PostPaymentLinkRequestData = (OzowPaymentLinkRequest & object) & {
    _embedded?: {
        loanPaymentLinkRequests?: ViewOzowPaymentLinkRequests;
    };
};
export type GetPaymentLinkPaymentRequestsData = ViewOzowPaymentRequests;
export type EmailPaymentLinkRequestData = any;
export type GetPaymentLinkRequestFieldsData = FormFieldsValidationResponse;
export type ValidatePaymentLinkRequestData = FormFieldsValidationResponse;
export interface GetTransactionsParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Field by which the records will be sorted */
    sortBy?: SortByEnum4;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
    /** Types of transactions to be displayed */
    includeTransactionType?: IncludeTransactionTypeEnum[];
    /**
     * Loan ID
     * @example "3k3ixDhsDYLbaWt"
     */
    loanId: string;
}
/** Field by which the records will be sorted */
export declare enum SortByEnum4 {
    CreatedAt = "createdAt"
}
export declare enum IncludeTransactionTypeEnum {
    DISBURSEMENT = "DISBURSEMENT",
    MONEY_RECEIVED = "MONEY_RECEIVED",
    MONEY_ALLOCATED = "MONEY_ALLOCATED",
    LOSSES = "LOSSES"
}
export type GetTransactionsData = ViewTransaction;
/** Field by which the records will be sorted */
export declare enum GetTransactionsParams1SortByEnum {
    CreatedAt = "createdAt"
}
export declare enum GetTransactionsParams1IncludeTransactionTypeEnum {
    DISBURSEMENT = "DISBURSEMENT",
    MONEY_RECEIVED = "MONEY_RECEIVED",
    MONEY_ALLOCATED = "MONEY_ALLOCATED",
    LOSSES = "LOSSES"
}
export type GetLoanTransactionData = ViewTransaction;
export type CancelLoanTransactionData = ViewTransaction;
export type AddDisbursementData = any;
export type ValidateDisbursementFormFieldsData = FormFieldsValidationResponse;
export interface GetLoanDisbursementRequestsParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Field by which the records will be sorted */
    sortBy?: SortByEnum5;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
}
/** Field by which the records will be sorted */
export declare enum SortByEnum5 {
    RequestedOn = "requestedOn"
}
export interface GetLoanDisbursementRequestsData {
    disbursementRequests?: DisbursementRequestResponse[];
    metaData?: MetaData;
    _embedded?: {
        /** @example ["requestedOn"] */
        sortFields?: any[];
    };
    _links?: HalLink[];
}
/** Field by which the records will be sorted */
export declare enum GetLoanDisbursementRequestsParams1SortByEnum {
    RequestedOn = "requestedOn"
}
export type RequestDisbursementData = NewDisbursementRequestResponse;
export type GetApprovalPendingDisbursementRequestData = NewDisbursementRequestResponse;
export type GetRevioCollectionGatewayLoanData = RevioCollectionGatewayLoanDetailsSchema;
export interface GetDisbursementRequestsParams {
    /** In which order will the data be sorted (ascending or descending) */
    orderBy?: OrderByEnum;
    /** Search items by partial matching of search param */
    search?: string;
    /** Number of items in the response */
    limit?: number;
    /** Page number */
    page?: number;
}
export interface GetDisbursementRequestsData {
    disbursementRequests?: DisbursementRequestResponse[];
}
export type PostApproveBulkDisbursementRequestsData = BulkDisbursementRequestApproveResponse;
export type ResetRiskFlagData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export type PostCancelDisbursementRequestsData = NewDisbursementRequestResponse;
export type PostApproveDisbursementRequestsData = NewDisbursementRequestResponse;
export type DisbursementRequestRevioStatusUpdateData = NewDisbursementRequestResponse;
export type AddRepaymentData = any;
export type GetRepaymentFormFieldsData = FormFieldsValidationResponse;
export type ValidateRepaymentFormFieldsData = FormFieldsValidationResponse;
export type GetServerTimeData = any;
export interface UpdateServerTimePayload {
    /**
     * New date
     * @example "2023-09-01"
     */
    newDate?: string;
}
export type UpdateServerTimeData = any;
export type GetAccountTransactionsData = any;
export type ActualizeLoanData = any;
export type GetLoanBySalesforceIdData = (LoanResponse & object) & {
    _links?: HalLink[];
};
export type PutLoanBySalesforceIdData = (LoanResponse & object) & {
    _links?: HalLink[];
};
//# sourceMappingURL=data-contracts.d.ts.map