import {TOKEN} from "./generadorToken.js"
import{generarURI}from"./generadorUri.js"
import {consumirApi} from "./consumirApi.js"
import {reproducirCanciones}from "./reproductor.js"

let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let ArtistaSeleccionado=document.getElementById("artista").value
let URI=generarURI(ArtistaSeleccionado)

    async function activarApi(){
        let datosConsultadosApi= await consumirApi(URI,TOKEN)
        console.log(datosConsultadosApi)
        
        //llamar a pintar canciones
        reproducirCanciones(datosConsultadosApi)
 
    }
    activarApi()
     
     
})  
