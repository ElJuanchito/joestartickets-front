import { CreateSectionDTO } from "./create-section-dto"

export interface CreateEventDTO {

    coverImg: string,
    status: string,
    name: string,
    description: string,
    address: string,
    sectionImg: string,
    type: string,
    date: Date,
    city: string,
    sections: CreateSectionDTO[]
}