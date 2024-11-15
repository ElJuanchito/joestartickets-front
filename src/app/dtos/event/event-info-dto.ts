import { SectionDTO } from "./section-dto";

export interface EventInfoDTO {
    id: string,
    coverImg: string,
    status: string,
    name: string,
    description: string,
    address: string,
    sectionImg: string,
    type: string,
    date: Date,
    city: string,
    sections: SectionDTO[]
}