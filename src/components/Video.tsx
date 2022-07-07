import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "phosphor-react";
import { DefaultUi, Player, Youtube } from '@vime/react'
import '@vime/core/themes/default.css';
import { useAPI } from "../hooks/useAPI";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {

  const { data } = useAPI(`http://127.0.0.1:8000/api/v1/aulas/?slug=${props.lessonSlug}`);

  if(!data) {
    return (
      <div className="flex-1" >
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1" id="content">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Player>
                <Youtube videoId="w4o12HtuUfo"/>
                <DefaultUi />
            </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 lg:flex-col">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
                {data[0].title}
            </h1>
            <p className="mt-3 text-gray-200">
            {data[0].description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data[0].teacher.image_url}
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                {data[0].teacher.teacher}
                </strong>
                <span className="text-gray-200 text-sm block">
                  Desenvolvedor Full-Stack
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-full">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2 xl:grid-cols-1">
            <a href="#" className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                    <FileArrowDown size={40}/>
                </div>
                <div className="flex justify-between w-full">
                  <div className="py-6 leading-relaxed">
                      <strong className="text-2xl md:text-lg">
                          Material complementar
                      </strong>
                      <p className="text-sm text-gray-200 mt-2 md:text-xs">
                          Acesse o material complementar para acelerar seu desenvolvimento</p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                      <CaretRight size={24} className="text-blue-500"/>
                  </div>
                </div>
            </a>
            <a href="#" className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                    <ImageSquare size={40}/>
                </div>
                <div className="flex justify-between w-full">
                  <div className="py-6 leading-relaxed">
                      <strong className="text-2xl md:text-lg">
                          Wallpapers exclusivos
                      </strong>
                      <p className="text-sm text-gray-200 mt-2 md:text-xs">
                      Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                      </p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                      <CaretRight size={24} className="text-blue-500"/>
                  </div>
                </div>
            </a>
        </div>
      </div>
    </div>
  );
}
