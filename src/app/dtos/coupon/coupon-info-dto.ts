export interface CouponInfoDTO {
    id: string,
    discount: number,
    expirationDate: Date,
    code: string,
    status: string,
    type: string,
    name: string
}