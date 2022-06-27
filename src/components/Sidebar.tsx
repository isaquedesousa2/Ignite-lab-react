import { useAPI } from "../hooks/useAPI";
import { Lesson } from "./Lesson";
import { useLocation, useNavigate } from "react-router-dom";

interface Aside {
  setCheckAside: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar(props: Aside) {
  const { data } = useAPI('http://127.0.0.1:8000/api/v1/aulas/');

  const location = useLocation();
  const navigate = useNavigate()

  if(!data){
    return (
      <div>Carregando...</div>
    )
  }
  
  if(location.pathname === '/evento' || location.pathname === '/evento/aulas'){
      navigate(`/evento/aulas/${data && data[0].slug}`)
      console.log(data && data[0].slug)    
  }    


  return (
    <aside id="aside" className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 block lg:hidden">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              date={new Date(lesson.date)}
              lesson_type={lesson.lesson_type}
              slug={lesson.slug}
              setCheckAside={props.setCheckAside}
            />
          );
        })}
      </div>
    </aside>
  );
}
