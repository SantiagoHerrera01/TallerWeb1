let resultado
let repetir = true
let contadorUno = 0;
let contadorDos = 0;
let contadorTres = 0;
let contadorCuatro = 0;
let contadorCinco = 0;
let contadorSeis = 0;

function numeroMayorMenor(resultado){
    contadorUno++;
let numeroUno
let numeroDos
let numeroTres
    numeroUno= Number(prompt('Digite un numero: '))
    numeroDos= Number(prompt('Digite un numero: '))
    numeroTres= Number(prompt('Digite un numero: '))
    
    if (numeroUno<numeroDos && numeroDos<numeroTres){
       resultado= console.log(numeroUno,numeroDos,numeroTres);
       resultado= console.log(numeroTres,numeroDos,numeroUno);
       return console.log(resultado); 
    }
    if(numeroUno>numeroDos&&numeroDos>numeroTres){
        resultado=console.log(numeroTres,numeroDos,numeroUno);
        resultado=console.log(numeroUno,numeroDos,numeroTres);
        return console.log(resultado);
    }
   
    if(numeroUno<numeroDos&&numeroDos>numeroTres) {
        resultado= console.log(numeroTres,numeroUno,numeroDos);
        resultado= console.log(numeroDos,numeroUno,numeroTres);
        return console.log(resultado);
    }
    
    if (numeroUno>numeroDos && numeroDos<numeroTres) {
        resultado=console.log(numeroDos,numeroTres,numeroUno);
        resultado=console.log(numeroUno,numeroTres,numeroDos);
        return console.log(resultado);
    }
    
    
}

function areaCircunferencia(resultado,contadorDos){
    contadorDos ++;
    let radioC
    radioC=Number(prompt('Digite el radio de la circunferencia'))

    resultado= 3.14 * radioC

    return console.log(`El radio de la circunferencia es: ${ resultado}`);
    
}

function tipoTriangulo(resultado) {
    contadorTres ++;
    let ladoUno
    let ladoDos
    let ladoTres

   ladoUno= Number(prompt("Digite la medida del lado uno"))
   ladoDos= Number(prompt("Digite la medida del lado dos"))
   ladoTres= Number(prompt("Digite la medida del lado tres"))

   if(ladoUno!= ladoDos && ladoDos!=ladoTres){
        resultado= console.log('Es un triangulo escaleno');
   }

   if(ladoUno==ladoDos && ladoDos != ladoTres){
        resultado= console.log('Es un triangulo isóceles');
   }

   
   if(ladoUno===ladoDos&&ladoDos===ladoTres){
    resultado=console.log('Es un triangulo equilatero');
   }
   return resultado
   
}



function numerosAmigos(resultado) {
    
    contadorCuatro ++;
    //Numero Uno
    let numeroUno = parseInt(prompt('Digite el primer numero: '));
    let divisoresNum1 = [1]
    for(let i = 2; i < numeroUno; i++){
        if (numeroUno % i == 0){
        divisoresNum1.push(i)
        }
        else if(divisoresNum1.length < 2){
            divisoresNum1.push(numeroUno)
        }

    }
    let sumaDiv1 = divisoresNum1.reduce((a,b)=>a+b)
    console.log(`Los divisores de ${numeroUno} son: ${divisoresNum1} y la suma es: ${sumaDiv1} `)
        // Numero dos
    let numeroDos = parseInt(prompt('Digite el segundo numero: '));
    let divisoresNum2 = [1]
    for(let i = 2; i < numeroDos; i++){
        if (numeroDos % i == 0){   
            divisoresNum2.push(i)
        }else if(divisoresNum2.length < 2){
            divisoresNum2.push(numeroUno)
            }
    }
    let sumaDiv2 = divisoresNum2.reduce((a,b)=>a+b)
    console.log(`Los divisores de ${numeroDos} son: ${divisoresNum2} y su suma es: ${sumaDiv2} `)
    //Comprobacion
    if(sumaDiv1 == numeroDos && sumaDiv2 == numeroUno){
            resultado= console.log(`${numeroUno} y ${numeroDos} son números amigos`)
        }else{
            resultado= console.log(`${numeroUno} y ${numeroDos} no son números amigos`)
        }
    return resultado
    
}




function valorCantidadCompra(resultado) {
    contadorCinco++;

    let valor 
    let cantidad
    

    valor = parseInt(prompt('Digite el valor unitario: '))
    cantidad = parseInt(prompt('Digite la cantidad'))

    let totalSinIva= valor*cantidad
    console.log(`El total sin iva es: ${ totalSinIva}`);

    let iva = totalSinIva*(19/100)
    let totalConIva=totalSinIva+iva
    console.log(`El total con iva es: ${ totalConIva}`);

    if(totalConIva>=1000000){
        let descuento= totalConIva-totalConIva*0.1
        resultado = console.log(`El total de su compra es: ${descuento}`);
    }

    if (totalConIva>=500000&&totalConIva<1000000){
        resultado= console.log(`Se devuleve un total de: ${totalConIva-totalSinIva}`);
        console.log(`El valor de su compra es de: ${totalSinIva}`);

    }
    
    return resultado
    
}




  
  

while (repetir) { 

const menu = Number(prompt('Ingrese la operacion a ejecutar: \n1 -Numeros de mayor a menor \n2 -Area de una circunferencia \n3 - Tipo de triangulo\n4 - ingresar dos números y ver si son amigos o no\n5 - valor de compra y cantidad \n6 - notas del estudiante  \n0 -Salir'));

switch(menu){
    case 1:
    numeroMayorMenor(resultado)
        break

    case 2:
    areaCircunferencia(resultado)
        break
    
    case 3:
    tipoTriangulo(resultado)
        break

    case 4:
        numerosAmigos(resultado)
        break

    case 5:
        valorCantidadCompra(resultado)
        break
    
    case 6:
        validarNotas();
        break
    case 0:
    repetir=false
        break
    default:
        alert("Por favor ingrese un valor correcto :)")
        break
}
}
console.log(`El ejercicio 1 se ejecutó ${contadorUno} veces`);
console.log(`El ejercicio 2 se ejecutó ${contadorDos} veces`);
console.log(`El ejercicio 3 se ejecutó ${contadorTres} veces`);
console.log(`El ejercicio 4 se ejecutó ${contadorCuatro} veces`);
console.log(`El ejercicio 5 se ejecutó ${contadorCinco} veces`);
console.log(`El ejercicio 6 se ejecutó ${contadorSeis} veces`);