 export async function generarToken(){

    let URI="https://accounts.spotify.com/api/token"

    let client_id="client_id=dbcd157fee1a444d84022c05ea178fac"
    let client_secret="client_secret=7b74e81046ff4949b47d92e77c9aac5b"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=await respuesta.json()
    let token=`${respuestaFINAL.token_type} ${respuestaFINAL.access_token}`
    return(token)
   



}



