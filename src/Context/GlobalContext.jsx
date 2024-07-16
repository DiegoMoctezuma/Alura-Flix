import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

const estadoInicial = {
    equipos: [],
    videos: [],
    contenidoVideo:{},
    randomVideo: {},
    modalAbierto: false,
    videoSeleccionado: null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_EQUIPOS':
            return {...state, equipos: action.payload};
        case 'SET_VIDEOS':
            return {...state, videos: action.payload};
        case 'SET_VIDEO_SELECCIONADO':
            return {...state, videoSeleccionado: action.payload, modalAbierto: action.payload != null ? true : false};
        case 'UPDATE_VIDEO':
            fetch(`http://localhost:3000/Videos/${action.payload.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
            return {...state, contenidoVideo: action.payload};
        
        case 'CREATE_VIDEO':
            fetch(`http://localhost:3000/Videos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            });
            return {...state, contenidoVideo: action.payload};

        case 'DELETE_VIDEO':
            fetch(`http://localhost:3000/Videos/${action.payload.id}`, {
                method: 'DELETE'
            }).then( res => console.log(res));
            return {...state, contenidoVideo: action.payload};

        case 'SET_RANDOM_VIDEO':
            const randomIndex = Math.floor(Math.random() * action.payload.length);
            return {
                ...state, 
                randomVideo: action.payload[randomIndex]
            };
        default:
            return state;
    }
}

function GlobalContextProvider ({children}) {

    const [ state,dispatch ] = useReducer(reducer,estadoInicial);

    // Conexion con la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const equiposResponse = await fetch('http://localhost:3000/Equipos');
                const equiposData = await equiposResponse.json();
                dispatch({ type: 'SET_EQUIPOS', payload: equiposData });

                const videosResponse = await fetch('http://localhost:3000/Videos');
                const videosData = await videosResponse.json();
                dispatch({ type: 'SET_VIDEOS', payload: videosData });
                dispatch({ type: 'SET_RANDOM_VIDEO', payload: videosData });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [ , state.contenidoVideo]);

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;