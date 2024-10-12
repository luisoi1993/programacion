let lista = [];
        let repetido;
        for (let i = 0; i < 10; i++) {
            while (!lista[i]) {
                repetido = true;
                while (repetido == true) {
                    let random = Math.random();
                    random = random * 10 + 1;
                    random = Math.trunc(random);
                    for (let j = 0; j < lista.length; j++) {
                        if (lista[j] == random) {
                            repetido = true;
                            break;
                        } else {
                            repetido = false;
                        }
                    }
                    lista[i] = random;
                }

            }
        }

        console.log(lista);

        function myFunction() {
          document.getElementById("0").innerHTML = lista[0];
          document.getElementById("1").innerHTML = lista[1];
          document.getElementById("2").innerHTML = lista[2];
          document.getElementById("3").innerHTML = lista[3];
          document.getElementById("4").innerHTML = lista[4];
          document.getElementById("5").innerHTML = lista[5];
          document.getElementById("6").innerHTML = lista[6];
          document.getElementById("7").innerHTML = lista[7];
          document.getElementById("8").innerHTML = lista[8];
          document.getElementById("9").innerHTML = lista[9];
          }

        function funcion0(){
          alert(lista[0]);
      document.getElementById("0").style.backgroundColor = "#0000FF";
        }

        function funcion1(){
          alert(lista[1]);
      document.getElementById("1").style.backgroundColor = "#0000FF";
        }

        function funcion2(){
          alert(lista[2]);
      document.getElementById("2").style.backgroundColor = "#0000FF";
        }

        function funcion3(){
          alert(lista[3]);
      document.getElementById("3").style.backgroundColor = "#0000FF";
        }
        function funcion4(){
          alert(lista[4]);
      document.getElementById("4").style.backgroundColor = "#0000FF";
        }
