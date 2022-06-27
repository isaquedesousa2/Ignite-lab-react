import Icon from "./Icon";

export function Footer(){
    return (
        <div className="bg-gray-700 w-full flex justify-between items-center p-6 border-t border-gray-600 text-center text-base md:flex-col md:gap-6 md:text-sm">
            <div className="flex gap-6 items-center md:flex-col">
                <Icon />
                <span>Rocketseat - Todos os direitos reservados</span>
            </div>
            <span>Políticas de privacidade</span>
        </div>
    )
}