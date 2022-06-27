import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface Sidebar {
  title: string;
  date: Date;
  lesson_type: string;
  slug: string;
  setCheckAside: React.Dispatch<React.SetStateAction<boolean>>
}

export function Lesson(props: Sidebar) {
  const isLessonAvailable = isPast(props.date);
  const dateFormat = format(props.date, "EEEE' • 'd 'de' MMMM ' • 'k'h'mm ", {
    locale: ptBR,
  });

  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  function onClick(){
    if (isLessonAvailable){
      const content = document.getElementById("content") as HTMLElement;
      const aside = document.getElementById("aside") as HTMLElement;
      content.classList.remove("hidden");
      aside.classList.add("lg:hidden");
      props.setCheckAside(false)
    }
  }

  return (
    <Link
      to={isLessonAvailable ? `/evento/aulas/${props.slug}` : ""}
      className={classNames('group', {
        "hover:cursor-not-allowed": !isLessonAvailable,
      })}
      onClick={onClick}
    >
      <span className="text-gray-300">
        {dateFormat[0].toUpperCase() + dateFormat.substring(1)}
      </span>
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 transition-colors",
          {
            "bg-green-500": isActiveLesson,
            "group-hover:border-green-500": isLessonAvailable,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex gap-2 items-center text-sm font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex gap-2 items-center text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[2px] px-2 text-white border font-bold",
              {
                "border-white": isActiveLesson && isLessonAvailable,
                "border-green-300": !isActiveLesson && isLessonAvailable,
                "border-gray-500": !isLessonAvailable
              }
            )}
          >
            {props.lesson_type}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
