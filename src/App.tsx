import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import { routes } from './routers';
import Header from '@/components/Header';
function App() {
    return (
        <>
            <Header />
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route, key) => (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <Suspense fallback="Loading...">
                                        <route.component />
                                    </Suspense>
                                }
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </Suspense> 
        </>
    );
}

export default App;
