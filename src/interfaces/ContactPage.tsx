import { Contact } from "./Contact";

export declare interface ContactPage {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  contacts: Contact[];
}