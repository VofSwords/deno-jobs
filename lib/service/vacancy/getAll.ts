import Fauna from "$lib/fauna/index.ts";
import { Company, Vacancy } from "./index.ts";

const query = `
query {
  getAllVacancies {
    data {
      title,
      externalUrl,
      _id,
      company {
        name,
        verified,
        trusted,
        _id
      }
    }
  }
}
`

export interface ResponceVacancy extends Omit<Vacancy, 'company'> {
  company: Omit<Company, 'vacancies'>
}

const getAllVacancies = () => Fauna<{ getAllVacancies: { data: ResponceVacancy[] }}>(
    query,
    {}
  );

export default getAllVacancies;
