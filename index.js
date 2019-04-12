function print(e) {
  let entrada = e.split(",");
  let repeticiciones = entrada[0];
  let salida = entrada[1];

  let matriz1 = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "]
  ];
  let matriz2 = [
    [" ", "-", "-", "-", ""],
    [" ", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", " "],
    [" ", "-", "-", "-", " "]
  ];
  let matriz3 = [
    [" ", "-", "-", "-", ""],
    [" ", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "]
  ];
  let matriz4 = [
    [" ", " ", " ", " ", " "],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "]
  ];
  let matriz5 = [
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", " "],
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "]
  ];
  let matriz6 = [
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", " "],
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "]
  ];
  let matriz7 = [
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "]
  ];
  let matriz8 = [
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "]
  ];
  let matriz9 = [
    [" ", "-", "-", "-", ""],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", "-", "-", "-", ""]
  ];
  let matriz0 = [
    [" ", "-", "-", "-", " "],
    ["|", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "]
  ];

  let numeros = salida.split("");

  switch (numeros[0]) {
    case "0":
      Imprimir(repeticiciones, matriz0);
      break;
    case "1":
      Imprimir(repeticiciones, matriz1);
      break;
    case "2":
      Imprimir(repeticiciones, matriz2);
      break;
    case "3":
      Imprimir(repeticiciones, matriz3);
      break;
    case "4":
      Imprimir(repeticiciones, matriz4);
      break;
    case "5":
      Imprimir(repeticiciones, matriz5);
      break;
    case "6":
      Imprimir(repeticiciones, matriz6);
      break;
    case "7":
      Imprimir(repeticiciones, matriz7);
      break;
    case "8":
      Imprimir(repeticiciones, matriz8);
      break;
    case "9":
      Imprimir(repeticiciones, matriz9);
      break;
    default:
      console.log("Digite 0,0 para salir del programa");
      break;
  }
}

function Imprimir(repeticiciones, m1) {
  for (let j = 0; j < repeticiciones; j++) {
    for (let i = 0; i < 5; i++) {
      console.log(m1[i].join(""));
    }
  }
}

print("2,123");
print("2,456");
