async function generarToken(){

    let URI="https://accounts.spotify.com/api/token"

    let client_id="client_id=ca7290cde70e4e208cff7259f1312795"
    let client_secret="client_secret=6b22e65566a147119fd455df5caac481"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    "Bearer BQAaK7oP2vkklHszntkMJXP4CPBMM-i9QqxQ8kBpTRm-fVyHRyNXL_PGjx4dNRGzsrVGlqnvEIEDCvWLZd8"

    fetch(URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

}

generarToken()
