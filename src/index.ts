import "./styles.css";
// IMPORTANTE: PARA COMENTAR PRESIONE CTRL + C CTRL + U
// IMPORTANTE: PARA DESCOMENTAR PRESIONE CTRL + K CTRL + U

let rotulo = document.getElementById("rotulo");
let resultado = document.getElementById("resultado")
//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  let v1: number[] = new Array(6);
  let v2: number[] = new Array(6);
  let vSuma: number[] = new Array(6);

  //variable global
  let indice: number;

  for (indice = 0; indice < v2.length; indice++) {
    v2[indice] = Number(prompt(`Ingrese la dimension del arreglo`)

    );
//sumo los vectores y muestro
    for (indice = 0; indice < 6; indice++) {
      vSuma[indice] = v1[indice] + v2[indice];

      console.log("vSuma[", indice, "]=", vSuma[indice]);
    }

  }
