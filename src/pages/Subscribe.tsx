import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import imgUrl from "../../src/assets/code-mockup.png";

export function Subscribe(){

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        navigate('/evento');
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
           <div className=" max-w-[1100px] flex gap-3 justify-between items-center mt-20 w-full mx-auto lg:flex-col">
                <div className="max-w-[640px] lg:flex lg:flex-col lg:items-center lg:text-center lg:px-3">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight lg:text-3xl">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed lg:text-sm">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 lg:max-w-[640px] lg:w-full lg:mt-3">
                    <strong className="text-2xl mb-6 block lg:text-center">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
                        <input
                        className="bg-gray-900 rounded h-14 px-5"
                         type="text"
                          placeholder="Seu nome completo" 
                          required
                          />
                          <input
                        className="bg-gray-900 rounded h-14 px-5"
                         type="email"
                          placeholder="Digite seu e-mail" 
                          required
                          />
                          <button className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                          type="submit">
                            Garantir minha vaga
                          </button>
                    </form>
                </div>
           </div>

            <img src={imgUrl} className="mt-10" alt="" />
        </div>
    )
}