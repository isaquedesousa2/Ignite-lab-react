import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { useAPI } from './hooks/useAPI'
import { Event } from './pages/Event'
import { Subscribe } from './pages/Subscribe'

export function Router(){

    return (
        <Routes>
            <Route path='/' element={(
                <div>
                    <Subscribe />
                    <Footer />
                </div>
            )}/>
            <Route path='/evento' element={<Event />}/>
            <Route path='/evento/aulas' element={<Event />}/>
            <Route path='/evento/aulas/:slug' element={<Event />}/>
        </Routes>
    )
}