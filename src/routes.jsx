import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./Pages/PaginaBase";
import Home from "./Pages/Home";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;