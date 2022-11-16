export interface Company {
  name: string,
  verified: boolean,
  trusted: boolean,
  _id: string
  vacancies: Vacancy[]
}

export interface Vacancy {
  title: string,
  externalUrl: string,
  company: Company,
  _id: string
}
