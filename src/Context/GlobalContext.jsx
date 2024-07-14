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
        case 'SET_CONTENIDO_VIDEO':
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
        fetch('http://localhost:3000/Equipos')
        .then(res => res.json())
        .then(data => dispatch({type:'SET_EQUIPOS' , payload:data}));

        fetch('http://localhost:3000/Videos')
        .then(res => res.json())
        .then(data => {
            dispatch({type:'SET_VIDEOS' , payload:data});
            dispatch({type:'SET_RANDOM_VIDEO' , payload:data});
        });
    }, []);


    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;