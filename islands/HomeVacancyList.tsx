import IconGhost from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/ghost.tsx";
import getAllVacancies, { ResponceVacancy } from "$lib/service/vacancy/getAll.ts";
import VacancyItem from "$components/vacancy/homeListItem.tsx";

export interface VacancyListProps {
  isError: boolean,
  vacancies: ResponceVacancy[]
}

export const useVacancyListIsland = async (): Promise<VacancyListProps> => {
  const vacanciesRequest = await getAllVacancies();

  return {
    isError: !vacanciesRequest.success,
    vacancies: vacanciesRequest.success ? vacanciesRequest.response.getAllVacancies.data : []
  }
}

const VacancyList = (props: VacancyListProps) => {
  const wrapperClass = `h-full w-full flex flex-col justify-center items-center`
  if (props.isError) {
    return (
      <div class={ wrapperClass }>
        <IconGhost class={`text-gray-300 h-24 w-24`} />
        <span class={`text-2xl text-gray-600`}>
          Failed to get data
        </span>
        <span class={`text-sm text-gray-600`}>
          try refreshing the page
        </span>
      </div>
    );
  }
  
  return (
    <div class={ wrapperClass }>
      {
        props.vacancies.map(vacancy => (
          <div class={`w-full h-24 py-2`} key={ vacancy._id }>
            <VacancyItem { ...vacancy } />
          </div>
        ))
      }
    </div>
  )
}

export default VacancyList;
