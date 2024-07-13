import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"


function useModalEdit(){

    const { modalAbierto,videoSeleccionado,setModalAbierto, setVideoSeleccionado } = useContext(GlobalContext);

    const EditAbierto = (video) => {
        setVideoSeleccionado(video);
        setModalAbierto(true);
    }

    const EditCerrado = () => {
        setVideoSeleccionado(null);
        setModalAbierto(false);
    }

    return { modalAbierto,videoSeleccionado,EditAbierto,EditCerrado };
}

export default useModalEdit;