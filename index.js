
function interes(neto, cuotas) {
    switch (cuotas) {
      case 1:
          let total = neto;
          alert("Su total es: " + total)
          break;
      case 3:
          let total3 = neto * 1.1;
          let vcuotas3 = total3 / cuotas;
          alert("Su total es: " + total3+ "." + " 3 cuotas de: " + vcuotas3)
          break;
      case 6:
          let total6 = neto * 1.3;
          let vcuotas6 = total6 / cuotas;
          alert("Su total es: " + total6+ "." + " 6 cuotas de: " + vcuotas6)
          break;
      case 12:
          let total12 = neto * 1.5;
          let vcuotas12 = total12/ cuotas;
          alert("Su total es: " + total12+ "." + " 12 cuotas de: " + vcuotas12)
          break;
      default:
        console.log("Ingresa un numero de cuotas valido");
        break;
    }
  }
  
  let neto = parseFloat(prompt("Ingrese el total de su compra"))
  let cuotas = parseInt(prompt("Ingrese el numero de cuotas a financiar (3, 6, o 12)"))
  interes(neto, cuotas);