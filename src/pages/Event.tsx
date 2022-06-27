import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event(){
    const { slug } = useParams<{slug: string}>();
    const [checkAside, setCheckAside] = useState(false)
  
    return (
        <div className="flex flex-col min-h-screen">
            <Header checkAside={checkAside} setCheckAside={setCheckAside}/>
            <main className="flex flex-1">
                {
                    slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>
                }
                <Sidebar setCheckAside={setCheckAside}/>
            </main>
            <Footer />
        </div>
    )
}