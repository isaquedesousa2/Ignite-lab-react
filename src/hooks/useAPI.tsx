import { useState, useEffect } from 'react'
import axios from 'axios';


export interface LessonAPI {
    id: number;
    title: string;
    description: string;
    date: string;
    slug: string;
    lesson_type: string;
    teacher: {
        teacher: string;
        image_url: string;
    }

}

export function useAPI(url: string) {
    const [data, setData] = useState<LessonAPI[]>(); 

    useEffect(() => {
        axios.get(url).
        then((response) => setData(response.data));
    },[url]);

    return { data }
}
