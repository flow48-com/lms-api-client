/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
/** Currency */
export var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["USD"] = "USD";
    CurrencyEnum["ZAR"] = "ZAR";
    CurrencyEnum["AED"] = "AED";
})(CurrencyEnum || (CurrencyEnum = {}));
/** The country in which the business was incorporated */
export var IncorporationCountryEnum;
(function (IncorporationCountryEnum) {
    IncorporationCountryEnum["EG"] = "EG";
    IncorporationCountryEnum["JO"] = "JO";
    IncorporationCountryEnum["SA"] = "SA";
    IncorporationCountryEnum["AE"] = "AE";
    IncorporationCountryEnum["ES"] = "ES";
    IncorporationCountryEnum["ZA"] = "ZA";
})(IncorporationCountryEnum || (IncorporationCountryEnum = {}));
/**
 * The credit score associated to the customer
 * @example 1
 */
export var CreditScoreEnum;
(function (CreditScoreEnum) {
    CreditScoreEnum[CreditScoreEnum["Value1"] = 1] = "Value1";
    CreditScoreEnum[CreditScoreEnum["Value2"] = 2] = "Value2";
    CreditScoreEnum[CreditScoreEnum["Value3"] = 3] = "Value3";
    CreditScoreEnum[CreditScoreEnum["Value4"] = 4] = "Value4";
    CreditScoreEnum[CreditScoreEnum["Value5"] = 5] = "Value5";
    CreditScoreEnum[CreditScoreEnum["Value6"] = 6] = "Value6";
    CreditScoreEnum[CreditScoreEnum["Value7"] = 7] = "Value7";
    CreditScoreEnum[CreditScoreEnum["Value8"] = 8] = "Value8";
})(CreditScoreEnum || (CreditScoreEnum = {}));
/**
 * Internal risk associated with the customer
 * @example "LOW"
 */
export var InternalRisk;
(function (InternalRisk) {
    InternalRisk["VERY_HIGH"] = "VERY_HIGH";
    InternalRisk["HIGH"] = "HIGH";
    InternalRisk["NEUTRAL"] = "NEUTRAL";
    InternalRisk["LOW"] = "LOW";
})(InternalRisk || (InternalRisk = {}));
export var OrderByEnum;
(function (OrderByEnum) {
    OrderByEnum["Asc"] = "asc";
    OrderByEnum["Desc"] = "desc";
})(OrderByEnum || (OrderByEnum = {}));
export var PurchaseStatus;
(function (PurchaseStatus) {
    PurchaseStatus["Created"] = "created";
    PurchaseStatus["Sent"] = "sent";
    PurchaseStatus["Viewed"] = "viewed";
    PurchaseStatus["Error"] = "error";
    PurchaseStatus["Cancelled"] = "cancelled";
    PurchaseStatus["Overdue"] = "overdue";
    PurchaseStatus["Expired"] = "expired";
    PurchaseStatus["Blocked"] = "blocked";
    PurchaseStatus["Hold"] = "hold";
    PurchaseStatus["Released"] = "released";
    PurchaseStatus["PendingRelease"] = "pending_release";
    PurchaseStatus["PendingCapture"] = "pending_capture";
    PurchaseStatus["Preauthorized"] = "preauthorized";
    PurchaseStatus["Paid"] = "paid";
    PurchaseStatus["PendingExecute"] = "pending_execute";
    PurchaseStatus["PendingCharge"] = "pending_charge";
    PurchaseStatus["Cleared"] = "cleared";
    PurchaseStatus["Settled"] = "settled";
    PurchaseStatus["Chargeback"] = "chargeback";
    PurchaseStatus["PendingRefund"] = "pending_refund";
    PurchaseStatus["Refunded"] = "refunded";
})(PurchaseStatus || (PurchaseStatus = {}));
export var ServiceType;
(function (ServiceType) {
    ServiceType["SAMEDAY"] = "SAMEDAY";
    ServiceType["ONEDAY"] = "ONEDAY";
    ServiceType["TWODAY"] = "TWODAY";
})(ServiceType || (ServiceType = {}));
/** @example "Direct" */
export var CompanyResponseCompanySourceTypeEnum;
(function (CompanyResponseCompanySourceTypeEnum) {
    CompanyResponseCompanySourceTypeEnum["Partner"] = "Partner";
    CompanyResponseCompanySourceTypeEnum["Direct"] = "Direct";
    CompanyResponseCompanySourceTypeEnum["PartnerCustomer"] = "Partner customer";
})(CompanyResponseCompanySourceTypeEnum || (CompanyResponseCompanySourceTypeEnum = {}));
/**
 * Loan current status
 * @example "Pending"
 */
export var LoanResponseLoanStatusEnum;
(function (LoanResponseLoanStatusEnum) {
    LoanResponseLoanStatusEnum["Pending"] = "Pending";
    LoanResponseLoanStatusEnum["Approved"] = "Approved";
    LoanResponseLoanStatusEnum["Active"] = "Active";
    LoanResponseLoanStatusEnum["Late"] = "Late";
    LoanResponseLoanStatusEnum["Overdue"] = "Overdue";
    LoanResponseLoanStatusEnum["DefaultReview"] = "Default review";
    LoanResponseLoanStatusEnum["Restructured"] = "Restructured";
    LoanResponseLoanStatusEnum["DefaultProvision"] = "Default provision";
    LoanResponseLoanStatusEnum["WrittenOff"] = "Written off";
    LoanResponseLoanStatusEnum["PaidOff"] = "Paid off";
})(LoanResponseLoanStatusEnum || (LoanResponseLoanStatusEnum = {}));
/**
 * Disbursement Request Status
 * @example "NEW"
 */
export var DisbursementRequestResponseStatusEnum;
(function (DisbursementRequestResponseStatusEnum) {
    DisbursementRequestResponseStatusEnum["NEW"] = "NEW";
    DisbursementRequestResponseStatusEnum["APPROVED"] = "APPROVED";
    DisbursementRequestResponseStatusEnum["PAID"] = "PAID";
    DisbursementRequestResponseStatusEnum["FAILED"] = "FAILED";
    DisbursementRequestResponseStatusEnum["CANCELED"] = "CANCELED";
})(DisbursementRequestResponseStatusEnum || (DisbursementRequestResponseStatusEnum = {}));
/**
 * Disbursement Request Status
 * @example "Normal"
 */
export var DisbursementRequestResponsePriorityEnum;
(function (DisbursementRequestResponsePriorityEnum) {
    DisbursementRequestResponsePriorityEnum["Normal"] = "Normal";
    DisbursementRequestResponsePriorityEnum["Urgent"] = "Urgent";
})(DisbursementRequestResponsePriorityEnum || (DisbursementRequestResponsePriorityEnum = {}));
export var RevioPayPurchaseRequestClientDetailsEnum;
(function (RevioPayPurchaseRequestClientDetailsEnum) {
    RevioPayPurchaseRequestClientDetailsEnum["Email"] = "email";
    RevioPayPurchaseRequestClientDetailsEnum["Phone"] = "phone";
    RevioPayPurchaseRequestClientDetailsEnum["FullName"] = "full_name";
    RevioPayPurchaseRequestClientDetailsEnum["PersonalCode"] = "personal_code";
    RevioPayPurchaseRequestClientDetailsEnum["BrandName"] = "brand_name";
    RevioPayPurchaseRequestClientDetailsEnum["LegalName"] = "legal_name";
    RevioPayPurchaseRequestClientDetailsEnum["RegistrationNumber"] = "registration_number";
    RevioPayPurchaseRequestClientDetailsEnum["TaxNumber"] = "tax_number";
    RevioPayPurchaseRequestClientDetailsEnum["BankAccount"] = "bank_account";
    RevioPayPurchaseRequestClientDetailsEnum["BankCode"] = "bank_code";
    RevioPayPurchaseRequestClientDetailsEnum["BillingAddress"] = "billing_address";
    RevioPayPurchaseRequestClientDetailsEnum["ShippingAddress"] = "shipping_address";
})(RevioPayPurchaseRequestClientDetailsEnum || (RevioPayPurchaseRequestClientDetailsEnum = {}));
/**
 * Type of the loan
 * @example "RBF"
 */
export var NewLoanLoanTypeEnum;
(function (NewLoanLoanTypeEnum) {
    NewLoanLoanTypeEnum["RBF"] = "RBF";
    NewLoanLoanTypeEnum["IBF"] = "IBF";
    NewLoanLoanTypeEnum["IBF2"] = "IBF2";
})(NewLoanLoanTypeEnum || (NewLoanLoanTypeEnum = {}));
/**
 * Type of penalties
 * @example "FIXED"
 */
export var NewLoanPenaltyTypeEnum;
(function (NewLoanPenaltyTypeEnum) {
    NewLoanPenaltyTypeEnum["FIXED"] = "FIXED";
    NewLoanPenaltyTypeEnum["VARIABLE"] = "VARIABLE";
})(NewLoanPenaltyTypeEnum || (NewLoanPenaltyTypeEnum = {}));
/**
 * Method of allocation of interest
 * @example "INTEREST_UPFRONT"
 */
export var NewLoanInterestAllocationTypeEnum;
(function (NewLoanInterestAllocationTypeEnum) {
    NewLoanInterestAllocationTypeEnum["INTEREST_UPFRONT"] = "INTEREST_UPFRONT";
    NewLoanInterestAllocationTypeEnum["SPLIT_EQUALLY"] = "SPLIT_EQUALLY";
})(NewLoanInterestAllocationTypeEnum || (NewLoanInterestAllocationTypeEnum = {}));
/** @example "monthly_fixed" */
export var NewLoanRepaymentTypeEnum;
(function (NewLoanRepaymentTypeEnum) {
    NewLoanRepaymentTypeEnum["MonthlyFixed"] = "monthly_fixed";
    NewLoanRepaymentTypeEnum["WeeklyFixed"] = "weekly_fixed";
    NewLoanRepaymentTypeEnum["EndOfTenor"] = "end_of_tenor";
})(NewLoanRepaymentTypeEnum || (NewLoanRepaymentTypeEnum = {}));
/** @example "MONEY_RECEIVED" */
export var NewRepaymentTypeEnum;
(function (NewRepaymentTypeEnum) {
    NewRepaymentTypeEnum["MONEY_RECEIVED"] = "MONEY_RECEIVED";
    NewRepaymentTypeEnum["EXPENSE"] = "EXPENSE";
})(NewRepaymentTypeEnum || (NewRepaymentTypeEnum = {}));
export var NewRepaymentExpenseCategoryEnum;
(function (NewRepaymentExpenseCategoryEnum) {
    NewRepaymentExpenseCategoryEnum["BANK_CHARGE"] = "BANK_CHARGE";
    NewRepaymentExpenseCategoryEnum["DISCOUNTS"] = "DISCOUNTS";
    NewRepaymentExpenseCategoryEnum["WAIVED_PENALTIES"] = "WAIVED_PENALTIES";
    NewRepaymentExpenseCategoryEnum["OTHER"] = "OTHER";
})(NewRepaymentExpenseCategoryEnum || (NewRepaymentExpenseCategoryEnum = {}));
export var CancelOperationRequestReasonEnum;
(function (CancelOperationRequestReasonEnum) {
    CancelOperationRequestReasonEnum["ERROR"] = "ERROR";
    CancelOperationRequestReasonEnum["DISPUTE"] = "DISPUTE";
    CancelOperationRequestReasonEnum["OTHER"] = "OTHER";
})(CancelOperationRequestReasonEnum || (CancelOperationRequestReasonEnum = {}));
export var IncludeEnum;
(function (IncludeEnum) {
    IncludeEnum["IncorporationDate"] = "incorporationDate";
    IncludeEnum["CompanyType"] = "companyType";
    IncludeEnum["Industry"] = "industry";
    IncludeEnum["IsPartner"] = "isPartner";
    IncludeEnum["PartnerCompany"] = "partnerCompany";
    IncludeEnum["Email"] = "email";
    IncludeEnum["Phone"] = "phone";
    IncludeEnum["Website"] = "website";
    IncludeEnum["ContactName"] = "contactName";
    IncludeEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    IncludeEnum["IbfCreditLimit"] = "ibfCreditLimit";
    IncludeEnum["RbfCreditLimit"] = "rbfCreditLimit";
    IncludeEnum["CreditLimit"] = "creditLimit";
    IncludeEnum["CreditScore"] = "creditScore";
    IncludeEnum["NextReviewDate"] = "nextReviewDate";
    IncludeEnum["IsComplianceApproved"] = "isComplianceApproved";
    IncludeEnum["NextComplianceReviewDate"] = "nextComplianceReviewDate";
    IncludeEnum["BankName"] = "bankName";
    IncludeEnum["Iban"] = "iban";
    IncludeEnum["Swift"] = "swift";
    IncludeEnum["BankAddress"] = "bankAddress";
    IncludeEnum["CreatedAt"] = "createdAt";
    IncludeEnum["UpdatedAt"] = "updatedAt";
    IncludeEnum["UpdatedByUserId"] = "updatedByUserId";
})(IncludeEnum || (IncludeEnum = {}));
export var GetCompaniesParams1IncludeEnum;
(function (GetCompaniesParams1IncludeEnum) {
    GetCompaniesParams1IncludeEnum["IncorporationDate"] = "incorporationDate";
    GetCompaniesParams1IncludeEnum["CompanyType"] = "companyType";
    GetCompaniesParams1IncludeEnum["Industry"] = "industry";
    GetCompaniesParams1IncludeEnum["IsPartner"] = "isPartner";
    GetCompaniesParams1IncludeEnum["PartnerCompany"] = "partnerCompany";
    GetCompaniesParams1IncludeEnum["Email"] = "email";
    GetCompaniesParams1IncludeEnum["Phone"] = "phone";
    GetCompaniesParams1IncludeEnum["Website"] = "website";
    GetCompaniesParams1IncludeEnum["ContactName"] = "contactName";
    GetCompaniesParams1IncludeEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    GetCompaniesParams1IncludeEnum["IbfCreditLimit"] = "ibfCreditLimit";
    GetCompaniesParams1IncludeEnum["RbfCreditLimit"] = "rbfCreditLimit";
    GetCompaniesParams1IncludeEnum["CreditLimit"] = "creditLimit";
    GetCompaniesParams1IncludeEnum["CreditScore"] = "creditScore";
    GetCompaniesParams1IncludeEnum["NextReviewDate"] = "nextReviewDate";
    GetCompaniesParams1IncludeEnum["IsComplianceApproved"] = "isComplianceApproved";
    GetCompaniesParams1IncludeEnum["NextComplianceReviewDate"] = "nextComplianceReviewDate";
    GetCompaniesParams1IncludeEnum["BankName"] = "bankName";
    GetCompaniesParams1IncludeEnum["Iban"] = "iban";
    GetCompaniesParams1IncludeEnum["Swift"] = "swift";
    GetCompaniesParams1IncludeEnum["BankAddress"] = "bankAddress";
    GetCompaniesParams1IncludeEnum["CreatedAt"] = "createdAt";
    GetCompaniesParams1IncludeEnum["UpdatedAt"] = "updatedAt";
    GetCompaniesParams1IncludeEnum["UpdatedByUserId"] = "updatedByUserId";
})(GetCompaniesParams1IncludeEnum || (GetCompaniesParams1IncludeEnum = {}));
/** Field by which the records will be sorted */
export var SortByEnum;
(function (SortByEnum) {
    SortByEnum["CreatedAt"] = "createdAt";
})(SortByEnum || (SortByEnum = {}));
/** Field by which the records will be sorted */
export var GetCompanyActionLogParams1SortByEnum;
(function (GetCompanyActionLogParams1SortByEnum) {
    GetCompanyActionLogParams1SortByEnum["CreatedAt"] = "createdAt";
})(GetCompanyActionLogParams1SortByEnum || (GetCompanyActionLogParams1SortByEnum = {}));
/** Company field by which the records will be sorted */
export var SortByEnum1;
(function (SortByEnum1) {
    SortByEnum1["CompanyIdentifier"] = "companyIdentifier";
    SortByEnum1["LoanOfficerUserId"] = "loanOfficerUserId";
    SortByEnum1["LoanType"] = "loanType";
    SortByEnum1["GracePeriodDays"] = "gracePeriodDays";
    SortByEnum1["Tenor"] = "tenor";
    SortByEnum1["PenaltyPercent"] = "penaltyPercent";
    SortByEnum1["PenaltyType"] = "penaltyType";
    SortByEnum1["MonthlyRate"] = "monthlyRate";
    SortByEnum1["LoanStatus"] = "loanStatus";
    SortByEnum1["DisbursementDate"] = "disbursementDate";
    SortByEnum1["MaturityDate"] = "maturityDate";
    SortByEnum1["PayoffDate"] = "payoffDate";
    SortByEnum1["LoanApprovalDate"] = "loanApprovalDate";
    SortByEnum1["TimesDelinquent"] = "timesDelinquent";
    SortByEnum1["PrincipalAmount"] = "principalAmount";
    SortByEnum1["InterestAmount"] = "interestAmount";
    SortByEnum1["TotalDisbursedAmount"] = "totalDisbursedAmount";
    SortByEnum1["PaidPrincipalAmount"] = "paidPrincipalAmount";
    SortByEnum1["PaidInterestAmount"] = "paidInterestAmount";
    SortByEnum1["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    SortByEnum1["TotalPenaltyAmount"] = "totalPenaltyAmount";
    SortByEnum1["CreatedAt"] = "createdAt";
})(SortByEnum1 || (SortByEnum1 = {}));
export var IncludeEnum1;
(function (IncludeEnum1) {
    IncludeEnum1["SalesforceOpportunityId"] = "salesforceOpportunityId";
    IncludeEnum1["LoanOfficerUserId"] = "loanOfficerUserId";
    IncludeEnum1["GracePeriodDays"] = "gracePeriodDays";
    IncludeEnum1["PenaltyPercent"] = "penaltyPercent";
    IncludeEnum1["PenaltyType"] = "penaltyType";
    IncludeEnum1["LoanStatus"] = "loanStatus";
    IncludeEnum1["DisbursementDate"] = "disbursementDate";
    IncludeEnum1["MaturityDate"] = "maturityDate";
    IncludeEnum1["PayoffDate"] = "payoffDate";
    IncludeEnum1["LoanApprovalDate"] = "loanApprovalDate";
    IncludeEnum1["TimesDelinquent"] = "timesDelinquent";
    IncludeEnum1["TotalDisbursedAmount"] = "totalDisbursedAmount";
    IncludeEnum1["PaidPrincipalAmount"] = "paidPrincipalAmount";
    IncludeEnum1["PaidInterestAmount"] = "paidInterestAmount";
    IncludeEnum1["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    IncludeEnum1["TotalPenaltyAmount"] = "totalPenaltyAmount";
    IncludeEnum1["CreatedAt"] = "createdAt";
})(IncludeEnum1 || (IncludeEnum1 = {}));
/** Company field by which the records will be sorted */
export var GetCompanyLoansParams1SortByEnum;
(function (GetCompanyLoansParams1SortByEnum) {
    GetCompanyLoansParams1SortByEnum["CompanyIdentifier"] = "companyIdentifier";
    GetCompanyLoansParams1SortByEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    GetCompanyLoansParams1SortByEnum["LoanType"] = "loanType";
    GetCompanyLoansParams1SortByEnum["GracePeriodDays"] = "gracePeriodDays";
    GetCompanyLoansParams1SortByEnum["Tenor"] = "tenor";
    GetCompanyLoansParams1SortByEnum["PenaltyPercent"] = "penaltyPercent";
    GetCompanyLoansParams1SortByEnum["PenaltyType"] = "penaltyType";
    GetCompanyLoansParams1SortByEnum["MonthlyRate"] = "monthlyRate";
    GetCompanyLoansParams1SortByEnum["LoanStatus"] = "loanStatus";
    GetCompanyLoansParams1SortByEnum["DisbursementDate"] = "disbursementDate";
    GetCompanyLoansParams1SortByEnum["MaturityDate"] = "maturityDate";
    GetCompanyLoansParams1SortByEnum["PayoffDate"] = "payoffDate";
    GetCompanyLoansParams1SortByEnum["LoanApprovalDate"] = "loanApprovalDate";
    GetCompanyLoansParams1SortByEnum["TimesDelinquent"] = "timesDelinquent";
    GetCompanyLoansParams1SortByEnum["PrincipalAmount"] = "principalAmount";
    GetCompanyLoansParams1SortByEnum["InterestAmount"] = "interestAmount";
    GetCompanyLoansParams1SortByEnum["TotalDisbursedAmount"] = "totalDisbursedAmount";
    GetCompanyLoansParams1SortByEnum["PaidPrincipalAmount"] = "paidPrincipalAmount";
    GetCompanyLoansParams1SortByEnum["PaidInterestAmount"] = "paidInterestAmount";
    GetCompanyLoansParams1SortByEnum["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    GetCompanyLoansParams1SortByEnum["TotalPenaltyAmount"] = "totalPenaltyAmount";
    GetCompanyLoansParams1SortByEnum["CreatedAt"] = "createdAt";
})(GetCompanyLoansParams1SortByEnum || (GetCompanyLoansParams1SortByEnum = {}));
export var GetCompanyLoansParams1IncludeEnum;
(function (GetCompanyLoansParams1IncludeEnum) {
    GetCompanyLoansParams1IncludeEnum["SalesforceOpportunityId"] = "salesforceOpportunityId";
    GetCompanyLoansParams1IncludeEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    GetCompanyLoansParams1IncludeEnum["GracePeriodDays"] = "gracePeriodDays";
    GetCompanyLoansParams1IncludeEnum["PenaltyPercent"] = "penaltyPercent";
    GetCompanyLoansParams1IncludeEnum["PenaltyType"] = "penaltyType";
    GetCompanyLoansParams1IncludeEnum["LoanStatus"] = "loanStatus";
    GetCompanyLoansParams1IncludeEnum["DisbursementDate"] = "disbursementDate";
    GetCompanyLoansParams1IncludeEnum["MaturityDate"] = "maturityDate";
    GetCompanyLoansParams1IncludeEnum["PayoffDate"] = "payoffDate";
    GetCompanyLoansParams1IncludeEnum["LoanApprovalDate"] = "loanApprovalDate";
    GetCompanyLoansParams1IncludeEnum["TimesDelinquent"] = "timesDelinquent";
    GetCompanyLoansParams1IncludeEnum["TotalDisbursedAmount"] = "totalDisbursedAmount";
    GetCompanyLoansParams1IncludeEnum["PaidPrincipalAmount"] = "paidPrincipalAmount";
    GetCompanyLoansParams1IncludeEnum["PaidInterestAmount"] = "paidInterestAmount";
    GetCompanyLoansParams1IncludeEnum["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    GetCompanyLoansParams1IncludeEnum["TotalPenaltyAmount"] = "totalPenaltyAmount";
    GetCompanyLoansParams1IncludeEnum["CreatedAt"] = "createdAt";
})(GetCompanyLoansParams1IncludeEnum || (GetCompanyLoansParams1IncludeEnum = {}));
export var IncludeEnum2;
(function (IncludeEnum2) {
    IncludeEnum2["EntityId"] = "entityId";
    IncludeEnum2["LoanId"] = "loanId";
    IncludeEnum2["PrincipalPaid"] = "principalPaid";
    IncludeEnum2["InterestPaid"] = "interestPaid";
    IncludeEnum2["TotalPaid"] = "totalPaid";
    IncludeEnum2["TotalExpected"] = "totalExpected";
    IncludeEnum2["TotalForecasted"] = "totalForecasted";
    IncludeEnum2["PenaltiesDue"] = "penaltiesDue";
    IncludeEnum2["InstalmentTotalDueAmount"] = "instalmentTotalDueAmount";
    IncludeEnum2["IsCurrentPayment"] = "isCurrentPayment";
    IncludeEnum2["OverdueDays"] = "overdueDays";
    IncludeEnum2["TransactionType"] = "transactionType";
    IncludeEnum2["DueDate"] = "dueDate";
    IncludeEnum2["PrincipalDue"] = "principalDue";
    IncludeEnum2["InterestDue"] = "interestDue";
    IncludeEnum2["TotalRepaymentDue"] = "totalRepaymentDue";
    IncludeEnum2["LoanCurrency"] = "loanCurrency";
    IncludeEnum2["PaidDate"] = "paidDate";
    IncludeEnum2["PenaltyPaid"] = "penaltyPaid";
    IncludeEnum2["StartLateDate"] = "startLateDate";
    IncludeEnum2["StartPenaltySate"] = "startPenaltySate";
    IncludeEnum2["DaysUntilPayment"] = "daysUntilPayment";
})(IncludeEnum2 || (IncludeEnum2 = {}));
export var LoanIncludeEnum;
(function (LoanIncludeEnum) {
    LoanIncludeEnum["AnnualRate"] = "annualRate";
    LoanIncludeEnum["CancelNote"] = "cancelNote";
    LoanIncludeEnum["CompanyIdentifier"] = "companyIdentifier";
    LoanIncludeEnum["Company"] = "company";
    LoanIncludeEnum["Currency"] = "currency";
    LoanIncludeEnum["DailyRate"] = "dailyRate";
    LoanIncludeEnum["DelinquentAmount"] = "delinquentAmount";
    LoanIncludeEnum["DisbursementDate"] = "disbursementDate";
    LoanIncludeEnum["GracePeriodDays"] = "gracePeriodDays";
    LoanIncludeEnum["InterestAmount"] = "interestAmount";
    LoanIncludeEnum["LoanApprovalDate"] = "loanApprovalDate";
    LoanIncludeEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    LoanIncludeEnum["LoanRate"] = "loanRate";
    LoanIncludeEnum["LoanStatus"] = "loanStatus";
    LoanIncludeEnum["LoanType"] = "loanType";
    LoanIncludeEnum["MaturityDate"] = "maturityDate";
    LoanIncludeEnum["MonthlyRate"] = "monthlyRate";
    LoanIncludeEnum["Name"] = "name";
    LoanIncludeEnum["NetPayableInterest"] = "netPayableInterest";
    LoanIncludeEnum["NetPayablePenalties"] = "netPayablePenalties";
    LoanIncludeEnum["NetPayableTotal"] = "netPayableTotal";
    LoanIncludeEnum["NextPaymentDate"] = "nextPaymentDate";
    LoanIncludeEnum["PaidInterestAmount"] = "paidInterestAmount";
    LoanIncludeEnum["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    LoanIncludeEnum["PaidPrincipalAmount"] = "paidPrincipalAmount";
    LoanIncludeEnum["PaidTotalAmount"] = "paidTotalAmount";
    LoanIncludeEnum["PayoffDate"] = "payoffDate";
    LoanIncludeEnum["PenaltyPercent"] = "penaltyPercent";
    LoanIncludeEnum["PenaltyType"] = "penaltyType";
    LoanIncludeEnum["ProductVersion"] = "productVersion";
    LoanIncludeEnum["RepaymentAmount"] = "repaymentAmount";
    LoanIncludeEnum["RepaymentType"] = "repaymentType";
    LoanIncludeEnum["SalesforceOpportunityId"] = "salesforceOpportunityId";
    LoanIncludeEnum["Tenor"] = "tenor";
    LoanIncludeEnum["TimesDelinquent"] = "timesDelinquent";
    LoanIncludeEnum["TotalDisbursedAmount"] = "totalDisbursedAmount";
    LoanIncludeEnum["TotalLossesAmount"] = "totalLossesAmount";
    LoanIncludeEnum["TotalOutstandingAmount"] = "totalOutstandingAmount";
    LoanIncludeEnum["TotalPenaltyAmount"] = "totalPenaltyAmount";
    LoanIncludeEnum["DaysTillNextPayment"] = "daysTillNextPayment";
})(LoanIncludeEnum || (LoanIncludeEnum = {}));
export var GetScheduleItemsParams1IncludeEnum;
(function (GetScheduleItemsParams1IncludeEnum) {
    GetScheduleItemsParams1IncludeEnum["EntityId"] = "entityId";
    GetScheduleItemsParams1IncludeEnum["LoanId"] = "loanId";
    GetScheduleItemsParams1IncludeEnum["PrincipalPaid"] = "principalPaid";
    GetScheduleItemsParams1IncludeEnum["InterestPaid"] = "interestPaid";
    GetScheduleItemsParams1IncludeEnum["TotalPaid"] = "totalPaid";
    GetScheduleItemsParams1IncludeEnum["TotalExpected"] = "totalExpected";
    GetScheduleItemsParams1IncludeEnum["TotalForecasted"] = "totalForecasted";
    GetScheduleItemsParams1IncludeEnum["PenaltiesDue"] = "penaltiesDue";
    GetScheduleItemsParams1IncludeEnum["InstalmentTotalDueAmount"] = "instalmentTotalDueAmount";
    GetScheduleItemsParams1IncludeEnum["IsCurrentPayment"] = "isCurrentPayment";
    GetScheduleItemsParams1IncludeEnum["OverdueDays"] = "overdueDays";
    GetScheduleItemsParams1IncludeEnum["TransactionType"] = "transactionType";
    GetScheduleItemsParams1IncludeEnum["DueDate"] = "dueDate";
    GetScheduleItemsParams1IncludeEnum["PrincipalDue"] = "principalDue";
    GetScheduleItemsParams1IncludeEnum["InterestDue"] = "interestDue";
    GetScheduleItemsParams1IncludeEnum["TotalRepaymentDue"] = "totalRepaymentDue";
    GetScheduleItemsParams1IncludeEnum["LoanCurrency"] = "loanCurrency";
    GetScheduleItemsParams1IncludeEnum["PaidDate"] = "paidDate";
    GetScheduleItemsParams1IncludeEnum["PenaltyPaid"] = "penaltyPaid";
    GetScheduleItemsParams1IncludeEnum["StartLateDate"] = "startLateDate";
    GetScheduleItemsParams1IncludeEnum["StartPenaltySate"] = "startPenaltySate";
    GetScheduleItemsParams1IncludeEnum["DaysUntilPayment"] = "daysUntilPayment";
})(GetScheduleItemsParams1IncludeEnum || (GetScheduleItemsParams1IncludeEnum = {}));
export var GetScheduleItemsParams1LoanIncludeEnum;
(function (GetScheduleItemsParams1LoanIncludeEnum) {
    GetScheduleItemsParams1LoanIncludeEnum["AnnualRate"] = "annualRate";
    GetScheduleItemsParams1LoanIncludeEnum["CancelNote"] = "cancelNote";
    GetScheduleItemsParams1LoanIncludeEnum["CompanyIdentifier"] = "companyIdentifier";
    GetScheduleItemsParams1LoanIncludeEnum["Company"] = "company";
    GetScheduleItemsParams1LoanIncludeEnum["Currency"] = "currency";
    GetScheduleItemsParams1LoanIncludeEnum["DailyRate"] = "dailyRate";
    GetScheduleItemsParams1LoanIncludeEnum["DelinquentAmount"] = "delinquentAmount";
    GetScheduleItemsParams1LoanIncludeEnum["DisbursementDate"] = "disbursementDate";
    GetScheduleItemsParams1LoanIncludeEnum["GracePeriodDays"] = "gracePeriodDays";
    GetScheduleItemsParams1LoanIncludeEnum["InterestAmount"] = "interestAmount";
    GetScheduleItemsParams1LoanIncludeEnum["LoanApprovalDate"] = "loanApprovalDate";
    GetScheduleItemsParams1LoanIncludeEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    GetScheduleItemsParams1LoanIncludeEnum["LoanRate"] = "loanRate";
    GetScheduleItemsParams1LoanIncludeEnum["LoanStatus"] = "loanStatus";
    GetScheduleItemsParams1LoanIncludeEnum["LoanType"] = "loanType";
    GetScheduleItemsParams1LoanIncludeEnum["MaturityDate"] = "maturityDate";
    GetScheduleItemsParams1LoanIncludeEnum["MonthlyRate"] = "monthlyRate";
    GetScheduleItemsParams1LoanIncludeEnum["Name"] = "name";
    GetScheduleItemsParams1LoanIncludeEnum["NetPayableInterest"] = "netPayableInterest";
    GetScheduleItemsParams1LoanIncludeEnum["NetPayablePenalties"] = "netPayablePenalties";
    GetScheduleItemsParams1LoanIncludeEnum["NetPayableTotal"] = "netPayableTotal";
    GetScheduleItemsParams1LoanIncludeEnum["NextPaymentDate"] = "nextPaymentDate";
    GetScheduleItemsParams1LoanIncludeEnum["PaidInterestAmount"] = "paidInterestAmount";
    GetScheduleItemsParams1LoanIncludeEnum["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    GetScheduleItemsParams1LoanIncludeEnum["PaidPrincipalAmount"] = "paidPrincipalAmount";
    GetScheduleItemsParams1LoanIncludeEnum["PaidTotalAmount"] = "paidTotalAmount";
    GetScheduleItemsParams1LoanIncludeEnum["PayoffDate"] = "payoffDate";
    GetScheduleItemsParams1LoanIncludeEnum["PenaltyPercent"] = "penaltyPercent";
    GetScheduleItemsParams1LoanIncludeEnum["PenaltyType"] = "penaltyType";
    GetScheduleItemsParams1LoanIncludeEnum["ProductVersion"] = "productVersion";
    GetScheduleItemsParams1LoanIncludeEnum["RepaymentAmount"] = "repaymentAmount";
    GetScheduleItemsParams1LoanIncludeEnum["RepaymentType"] = "repaymentType";
    GetScheduleItemsParams1LoanIncludeEnum["SalesforceOpportunityId"] = "salesforceOpportunityId";
    GetScheduleItemsParams1LoanIncludeEnum["Tenor"] = "tenor";
    GetScheduleItemsParams1LoanIncludeEnum["TimesDelinquent"] = "timesDelinquent";
    GetScheduleItemsParams1LoanIncludeEnum["TotalDisbursedAmount"] = "totalDisbursedAmount";
    GetScheduleItemsParams1LoanIncludeEnum["TotalLossesAmount"] = "totalLossesAmount";
    GetScheduleItemsParams1LoanIncludeEnum["TotalOutstandingAmount"] = "totalOutstandingAmount";
    GetScheduleItemsParams1LoanIncludeEnum["TotalPenaltyAmount"] = "totalPenaltyAmount";
    GetScheduleItemsParams1LoanIncludeEnum["DaysTillNextPayment"] = "daysTillNextPayment";
})(GetScheduleItemsParams1LoanIncludeEnum || (GetScheduleItemsParams1LoanIncludeEnum = {}));
/** Company field by which the records will be sorted */
export var SortByEnum2;
(function (SortByEnum2) {
    SortByEnum2["CompanyIdentifier"] = "companyIdentifier";
    SortByEnum2["LoanOfficerUserId"] = "loanOfficerUserId";
    SortByEnum2["LoanType"] = "loanType";
    SortByEnum2["GracePeriodDays"] = "gracePeriodDays";
    SortByEnum2["Tenor"] = "tenor";
    SortByEnum2["PenaltyPercent"] = "penaltyPercent";
    SortByEnum2["PenaltyType"] = "penaltyType";
    SortByEnum2["MonthlyRate"] = "monthlyRate";
    SortByEnum2["LoanStatus"] = "loanStatus";
    SortByEnum2["DisbursementDate"] = "disbursementDate";
    SortByEnum2["MaturityDate"] = "maturityDate";
    SortByEnum2["PayoffDate"] = "payoffDate";
    SortByEnum2["LoanApprovalDate"] = "loanApprovalDate";
    SortByEnum2["TimesDelinquent"] = "timesDelinquent";
    SortByEnum2["PrincipalAmount"] = "principalAmount";
    SortByEnum2["InterestAmount"] = "interestAmount";
    SortByEnum2["TotalDisbursedAmount"] = "totalDisbursedAmount";
    SortByEnum2["PaidPrincipalAmount"] = "paidPrincipalAmount";
    SortByEnum2["PaidInterestAmount"] = "paidInterestAmount";
    SortByEnum2["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    SortByEnum2["TotalPenaltyAmount"] = "totalPenaltyAmount";
    SortByEnum2["CreatedAt"] = "createdAt";
})(SortByEnum2 || (SortByEnum2 = {}));
/** Company field by which the records will be sorted */
export var GetLoansParams1SortByEnum;
(function (GetLoansParams1SortByEnum) {
    GetLoansParams1SortByEnum["CompanyIdentifier"] = "companyIdentifier";
    GetLoansParams1SortByEnum["LoanOfficerUserId"] = "loanOfficerUserId";
    GetLoansParams1SortByEnum["LoanType"] = "loanType";
    GetLoansParams1SortByEnum["GracePeriodDays"] = "gracePeriodDays";
    GetLoansParams1SortByEnum["Tenor"] = "tenor";
    GetLoansParams1SortByEnum["PenaltyPercent"] = "penaltyPercent";
    GetLoansParams1SortByEnum["PenaltyType"] = "penaltyType";
    GetLoansParams1SortByEnum["MonthlyRate"] = "monthlyRate";
    GetLoansParams1SortByEnum["LoanStatus"] = "loanStatus";
    GetLoansParams1SortByEnum["DisbursementDate"] = "disbursementDate";
    GetLoansParams1SortByEnum["MaturityDate"] = "maturityDate";
    GetLoansParams1SortByEnum["PayoffDate"] = "payoffDate";
    GetLoansParams1SortByEnum["LoanApprovalDate"] = "loanApprovalDate";
    GetLoansParams1SortByEnum["TimesDelinquent"] = "timesDelinquent";
    GetLoansParams1SortByEnum["PrincipalAmount"] = "principalAmount";
    GetLoansParams1SortByEnum["InterestAmount"] = "interestAmount";
    GetLoansParams1SortByEnum["TotalDisbursedAmount"] = "totalDisbursedAmount";
    GetLoansParams1SortByEnum["PaidPrincipalAmount"] = "paidPrincipalAmount";
    GetLoansParams1SortByEnum["PaidInterestAmount"] = "paidInterestAmount";
    GetLoansParams1SortByEnum["PaidPenaltiesAmount"] = "paidPenaltiesAmount";
    GetLoansParams1SortByEnum["TotalPenaltyAmount"] = "totalPenaltyAmount";
    GetLoansParams1SortByEnum["CreatedAt"] = "createdAt";
})(GetLoansParams1SortByEnum || (GetLoansParams1SortByEnum = {}));
/** Field by which the records will be sorted */
export var SortByEnum3;
(function (SortByEnum3) {
    SortByEnum3["CreatedAt"] = "createdAt";
})(SortByEnum3 || (SortByEnum3 = {}));
/** Field by which the records will be sorted */
export var GetLoanActionLogParams1SortByEnum;
(function (GetLoanActionLogParams1SortByEnum) {
    GetLoanActionLogParams1SortByEnum["CreatedAt"] = "createdAt";
})(GetLoanActionLogParams1SortByEnum || (GetLoanActionLogParams1SortByEnum = {}));
/**
 * Type of the loan
 * @example "IBF"
 */
export var CalculateLoanInterestLoanTypeEnum;
(function (CalculateLoanInterestLoanTypeEnum) {
    CalculateLoanInterestLoanTypeEnum["RBF"] = "RBF";
    CalculateLoanInterestLoanTypeEnum["IBF"] = "IBF";
    CalculateLoanInterestLoanTypeEnum["IBF2"] = "IBF2";
})(CalculateLoanInterestLoanTypeEnum || (CalculateLoanInterestLoanTypeEnum = {}));
/** Field by which the records will be sorted */
export var SortByEnum4;
(function (SortByEnum4) {
    SortByEnum4["CreatedAt"] = "createdAt";
})(SortByEnum4 || (SortByEnum4 = {}));
export var IncludeTransactionTypeEnum;
(function (IncludeTransactionTypeEnum) {
    IncludeTransactionTypeEnum["DISBURSEMENT"] = "DISBURSEMENT";
    IncludeTransactionTypeEnum["MONEY_RECEIVED"] = "MONEY_RECEIVED";
    IncludeTransactionTypeEnum["MONEY_ALLOCATED"] = "MONEY_ALLOCATED";
    IncludeTransactionTypeEnum["LOSSES"] = "LOSSES";
})(IncludeTransactionTypeEnum || (IncludeTransactionTypeEnum = {}));
/** Field by which the records will be sorted */
export var GetTransactionsParams1SortByEnum;
(function (GetTransactionsParams1SortByEnum) {
    GetTransactionsParams1SortByEnum["CreatedAt"] = "createdAt";
})(GetTransactionsParams1SortByEnum || (GetTransactionsParams1SortByEnum = {}));
export var GetTransactionsParams1IncludeTransactionTypeEnum;
(function (GetTransactionsParams1IncludeTransactionTypeEnum) {
    GetTransactionsParams1IncludeTransactionTypeEnum["DISBURSEMENT"] = "DISBURSEMENT";
    GetTransactionsParams1IncludeTransactionTypeEnum["MONEY_RECEIVED"] = "MONEY_RECEIVED";
    GetTransactionsParams1IncludeTransactionTypeEnum["MONEY_ALLOCATED"] = "MONEY_ALLOCATED";
    GetTransactionsParams1IncludeTransactionTypeEnum["LOSSES"] = "LOSSES";
})(GetTransactionsParams1IncludeTransactionTypeEnum || (GetTransactionsParams1IncludeTransactionTypeEnum = {}));
/** Field by which the records will be sorted */
export var SortByEnum5;
(function (SortByEnum5) {
    SortByEnum5["RequestedOn"] = "requestedOn";
})(SortByEnum5 || (SortByEnum5 = {}));
/** Field by which the records will be sorted */
export var GetLoanDisbursementRequestsParams1SortByEnum;
(function (GetLoanDisbursementRequestsParams1SortByEnum) {
    GetLoanDisbursementRequestsParams1SortByEnum["RequestedOn"] = "requestedOn";
})(GetLoanDisbursementRequestsParams1SortByEnum || (GetLoanDisbursementRequestsParams1SortByEnum = {}));
