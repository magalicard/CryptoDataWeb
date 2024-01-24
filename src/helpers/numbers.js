export const parseFloatNumber = (number, afterPoint) => {
    const result = parseFloat(number).toFixed(afterPoint)
    return result === 'NaN' ? "-" : result
  }

  //este archivo es una acyuda para parsear numericos
  //recibe un numero  a parsear y cuants decimales van despues del .
  //lo de abajo es una validacion por si es o no un numero
