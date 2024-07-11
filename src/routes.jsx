import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./Pages/PaginaBase";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;