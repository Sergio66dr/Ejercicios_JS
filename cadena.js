exports.palindromo = function (fra) {
    // Convierto la cadena a minúscula
    var minuscula = fra.toLowerCase();
    // Convierto la cadena en un array
    var convertirArray = minuscula.split("");
    // Elimino los espacios del array
    var sinEspacios = "";
    for (i in convertirArray) {
        if (convertirArray[i] != " ") {
            sinEspacios += convertirArray[i];
        }
    }
    // Vuelvo a convertir en array
	var nuevoArray = sinEspacios.split("");
	var alReves = sinEspacios.split("").reverse();
    // Verifico sin son iguales
    flag = true;
    for (i = 0; i < nuevoArray.length; i++) {
        if (nuevoArray[i] != alReves[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
        return ("La cadena es un palíndromo.");
    } else {
        return ("La cadena NO es un palíndromo.");
    }
};

exports.palabrasCadena = function(cadena){
    return cadena.split(" ").length;
};

exports.cantidadLetra = function(cadena){
    ArrayCAdena = cadena.split(" ");
    cant = 0;
    for(i in ArrayCAdena){
        cant += ArrayCAdena[i].length;
    }
    return cant;
};

exports.numeroVocales = function (cadena){
    ArrayCAdena = cadena.split("");
    cant = 0;
    for(i in ArrayCAdena){
        if("a" == ArrayCAdena[i] || "A" == ArrayCAdena[i] ){
            cant+=1;
        }
        if("e" == ArrayCAdena[i]|| "E" == ArrayCAdena[i]){
            cant+=1;
        }
        if("i" == ArrayCAdena[i] ||"I" == ArrayCAdena[i]){
            cant+=1;
        }
        if("o" == ArrayCAdena[i] ||"O" == ArrayCAdena[i]){
            cant+=1;
        }
        if("u" == ArrayCAdena[i]|| "U" == ArrayCAdena[i]){
            cant+=1;
        }
    }
    return cant;
};

exports.numeroConso = function (cadena){
    ArrayCAdena = cadena.split("");
    cant = 0;
    for(i in ArrayCAdena){
        if("a" != ArrayCAdena[i] && "e" != ArrayCAdena[i]
            && "i" != ArrayCAdena[i] && "o" != ArrayCAdena[i]
                && "u" != ArrayCAdena[i] && "A" != ArrayCAdena[i] && "E" != ArrayCAdena[i]
                && "I" != ArrayCAdena[i] && "O" != ArrayCAdena[i]
                    && "U" != ArrayCAdena[i]){
            cant+=1;
        }
    }
    return cant;
};