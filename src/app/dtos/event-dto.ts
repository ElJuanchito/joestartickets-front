import {SectionDTO} from "./section-dto";

export interface EventDTO {

  id:string,
  name:string,
  description:string,
  date:Date,
  type:string,
  address:string,
  city:string,
  sections:SectionDTO[],
  coverImg:string,
  sectionImg:string,
  status:string
}
