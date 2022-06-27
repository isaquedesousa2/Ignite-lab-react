import { List, X } from "phosphor-react";
import React, { useState } from "react";
import { Logo } from "./Logo";

interface Aside {
    checkAside: boolean
    setCheckAside: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header(props: Aside){
    
    
    
    const onClickMenu = () => {
        const content = document.getElementById("content");
        const aside = document.getElementById("aside");
        
        if(content?.classList.contains("hidden")){
            content.classList.remove("hidden");
            aside?.classList.add("lg:hidden");
            aside?.classList.remove("w-full");
            props.setCheckAside(false)
        }else {
            content?.classList.add("hidden");
            aside?.classList.remove("lg:hidden");
            aside?.classList.add("w-full");
            props.setCheckAside(true)
        }
        
    }

    return (
        <header className="p-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 lg:justify-between">
            <Logo />
            <div className="flex items-center gap-2">
                <span>Aulas</span>
                <div id="icon"></div>
                {
                    props.checkAside ?
                    <X size={32} weight="bold" onClick={onClickMenu} className="cursor-pointer text-blue-500 hidden lg:block"/>
                     : 
                    <List size={32} weight="bold" onClick={onClickMenu} className="cursor-pointer text-blue-500 hidden lg:block"/>
                }
                    
                
            </div>
        </header>
    )
}