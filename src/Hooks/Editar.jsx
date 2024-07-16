import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"


function useModalEdit(){

    const { state, dispatch } = useContext(GlobalContext);
    // const { modalAbierto,videoSeleccionado,setModalAbierto, setVideoSeleccionado } = useContext(GlobalContext);

    const EditAbierto = (video) => {
        dispatch({type:'SET_VIDEO_SELECCIONADO', payload:video});
    }

    const EditarContenido = (contenido) => {
        dispatch({type:'UPDATE_VIDEO', payload:contenido});
    }

    const AgregarNuevoVideo = (video) => {
        dispatch({type:'CREATE_VIDEO', payload:video});
    }

    const EditCerrado = () => {
        dispatch({type:'SET_VIDEO_SELECCIONADO', payload:null});
    }

    const modalAbierto = state.modalAbierto;
    const videoSeleccionado = state.videoSeleccionado;

    return { modalAbierto,videoSeleccionado,EditAbierto,EditCerrado,EditarContenido,AgregarNuevoVideo };
}

export default useModalEdit;