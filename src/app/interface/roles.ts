export enum Roles {
    CREDIT_ANALYST = "CREDIT ANALYST",
    LOAN_APPLICANT = "LOAN APPLICANT",
    SUPER_ADMIN = "SUPER ADMIN"
}

export interface IRoleLogin{
    role : Roles,
    description: string,
}