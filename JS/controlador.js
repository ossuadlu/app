import{generarToken} from "./generadorToken.js"
import{generarUri} from "./generadorUri.js"
import{consumirAPI} from "./servicios.js"
import{pintarCanciones} from "./pintar.js"

let botonPlay=document.getElementById("botonPlay")
botonPlay.addEventListener("click",function(evento){
    evento.preventDefault()

    let ArtistaSeleccionado=document.getElementById("artista").value
    let URI=generarUri(ArtistaSeleccionado)

     async function activarApi(){

        let token=await generarToken()
       
        let cancionesApi=await consumirAPI(URI,token)
        pintarCanciones(cancionesApi)
    }
    activarApi()
    
})
