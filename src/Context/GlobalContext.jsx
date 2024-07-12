import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider ({children}) {

    const [equipos, setEquipos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [randomVideo, setRandomVideo] = useState({});

    // Conexion con la API
    useEffect(() => {
        fetch('http://localhost:3000/Equipos')
        .then(res => res.json())
        .then(data => setEquipos(data));

        fetch('http://localhost:3000/Videos')
        .then(res => res.json())
        .then(data => {
            setVideos(data);
            getRandomVideo(data);
        });
    }, []);
    
    // Función para obtener un video aleatorio
    const getRandomVideo = (videos) => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        setRandomVideo(videos[randomIndex]);
    };

    return(
        <GlobalContext.Provider value={{equipos,videos,randomVideo}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;