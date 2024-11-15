import { OrderDetailInfoDTO } from "./orderdetail-info-dto"

export interface OrderInfoDTO {

    id: string,
    total: number,
    date: Date,
    orderDetails: OrderDetailInfoDTO[]
}