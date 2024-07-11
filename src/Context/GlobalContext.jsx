import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider ({children}) {

    const [equipos, setEquipos] = useState([]);
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/Equipos')
        .then(res => res.json())
        .then(data => setEquipos(data));

        fetch('http://localhost:3000/Videos')
        .then(res => res.json())
        .then(data => setVideos(data));
    }, [])

    return(
        <GlobalContext.Provider value={{equipos,videos}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;