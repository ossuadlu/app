import{TOKEN} from "./generadorToken.js"
import{generarUri} from "./generadorUri.js"
import{consumirAPI} from "./servicios.js"
import{pintarCanciones} from "./pintar.js"

let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    let ArtistaSeleccionado=document.getElementById("artista").value
    let URI=generarUri(ArtistaSeleccionado)

     async function activarApi(){
        let cancionesApi=await consumirAPI(URI,TOKEN)
        console.log(cancionesApi)
        pintarCanciones(cancionesApi)
    }
    activarApi()
    
})
