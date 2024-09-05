//arreglo vacio

let arreglo = []

arreglo.push("teresita")

for (let indice = 0;indice < 3;indice++) {
    //instrucciones a seguir 
    arreglo.push(prompt( "ingresa nombre de un estudiantes de 3ro"))
    
}
let posicion = arreglo.indexOf(prompt ("ingresa un estudiante de 3ro"))
if (posicion <= 1) 
{
 console.log ("esta en el arreglo")   
}else{
    console.log(" no esta en el arrwglo")

}
