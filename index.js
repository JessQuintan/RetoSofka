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
    [" ", " ", " ", " ", ""],
    ["|", " ", " ", " ", "|"],
    [" ", "-", "-", "-", " "],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", " "]
  ];
  let matriz5 = [
    [" ", "-", "-", "-", ""],
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

  for (let j = 0; j < repeticiciones; j++) {
    for (let i = 0; i < 5; i++) {
      console.log(
        matriz1[i].join(""),
        matriz2[i].join(""),
        matriz3[i].join("")
      );
    }
  }
}

print("3,123");
