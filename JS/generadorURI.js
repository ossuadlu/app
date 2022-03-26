
 export function generarUri(codigo){
    let uri=`https://api.spotify.com/v1/artists/${codigo}/top-tracks?market=us`
    return(uri)
}
