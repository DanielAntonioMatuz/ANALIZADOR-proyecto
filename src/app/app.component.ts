import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'analizador';
  public contenido;
  public dataVocabulary = ['n', 'u', 'm', 'e', 'r', 'o', '=', '4', ' ', 'i', 'f', '(', ')', '<', '5', '{', 'c', 's', 'l', '.', 'g', '}', 't', '"']; // 24 elementos
  public fin = false;
  public contador = 0;
  public estadoInicio = 0;
  public estadoFinal = [26, 4];
  public estadoActual = this.estadoInicio;
  public status = false;
  public timeExecute;
  public terminal = false;
  public err;
  public bandera1 = false;
  public bandera2 = false;
  public bandera3 = false;
  public bandera4 = false;
  public bandera5 = false;
  public bandera6 = false;
  public contadorProceso = 0;
  public countData = 0;

  constructor() {
    this.contenido = '' +
      'numero = 4\n' +
      'if (numero < 5) {  ' +
      '\n console.log("entro")' +
      '\n } else {' +
      '\n console.log("no entro")' +
      '\n }';
  }

  ngOnInit(): void {
  }

  obtenerValor(value: string) {
    console.log(value.length);
    this.updateValue();
    this.analizador(value);
  }

  updateValue() {
    this.contador = 0;
    this.estadoActual = 0;
    this.estadoInicio = this.estadoActual;
    this.status = false;
    this.fin = false;
    this.timeExecute = 0;
    this.err = '';
    this.bandera1 = false;
    this.bandera2 = false;
    this.bandera3 = false;
    this.bandera4 = false;
    this.bandera5 = false;
    this.bandera6 = false;
    this.contadorProceso = 0;
    this.countData = 0;

  }

  terminalOpen() {

    this.terminal = !this.terminal;
  }

  analizador(value: string) {
    this.updateValue();
    value = value.replace(/ /g, '');
    value = value.replace(/(\r\n|\n|\r)/gm, '');
    console.log(value);
    let start = performance.now(),
      output = 0;

    while (!this.fin) {
      if (this.contador > value.length - 1) {
        console.log('TRUE');
        this.fin = true;
        break;
      }

      if (this.estadoActual == 0) { // n
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 1;
        } else {
          if (this.dataVocabulary[0] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 1;
          } else {
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }

        if (this.dataVocabulary[0] == value.charAt(this.contador) && this.bandera5) {
          this.estadoActual = 31;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 1) { // u
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 2;
        } else {
          if (this.dataVocabulary[1] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 2;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 2) { // m
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 3;
        } else {
          if (this.dataVocabulary[2] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 3;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 3) { // e
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 4;
        } else {
          if (this.dataVocabulary[3] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 4;
          } else {
            if (this.dataVocabulary[3] == value.charAt(this.contador) && this.bandera3) {
              this.estadoActual = 27;
            } else {
              this.err = this.err + ' ' + value.charAt(this.contador);
            }
          }
        }

        if (this.dataVocabulary[3] == value.charAt(this.contador) && this.bandera5) {
          this.estadoActual = 27;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 4) {  // r
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[4] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 5;
        } else {
          if (this.dataVocabulary[4] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 5;
          } else {
            this.contador = value.length;
            this.estadoActual = -1;
            this.err = this.err + ' ' + value.charAt(this.contador);
            break;
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 5) { // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador) && !this.bandera1) {
          this.estadoActual = 6;
        } else {
          if (this.dataVocabulary[5] == value.charAt(this.contador) && this.bandera1) {
            this.estadoActual = 6;
          } else {
            this.contador = value.length;

            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 6) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[6] == value.charAt(this.contador)) { // =
          this.estadoActual = 8;
        } else {
          if (this.dataVocabulary[13] == value.charAt(this.contador)) { //   <
            this.estadoActual = 9;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        console.log(this.estadoActual);

        this.contador++;
      }

      if (this.estadoActual == 8) {   // 4
        console.log(value.charAt(this.contador));
        var val = this.contador;
        if (this.dataVocabulary[7] == value.charAt(this.contador) && value.charAt(val + 1)) {
          this.estadoActual = 10;
        } else {
          if (this.dataVocabulary[7] == value.charAt(this.contador) && !value.charAt(val + 1)) {
            this.estadoActual = 4;
            this.contador = value.length;
          } else {
            this.contador = value.length;

            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 9) {   // 5
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[14] == value.charAt(this.contador)) {
          this.estadoActual = 13;
        } else {
          this.contador = value.length;

          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 10) {   // i
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[9] == value.charAt(this.contador)) {
          this.estadoActual = 11;
        } else {
          this.contador = value.length;
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 11) {   // f
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[10] == value.charAt(this.contador)) {
          this.estadoActual = 12;
        } else {
          this.contador = value.length;
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 12) {   // (
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[11] == value.charAt(this.contador) && !this.bandera2) {
          this.bandera1 = true;
          this.estadoActual = 0;
        } else {
          if (this.dataVocabulary[11] == value.charAt(this.contador) && this.bandera2) {
            this.estadoActual = 41;
            this.bandera1 = false;
            this.bandera2 = false;
            this.bandera3 = true;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }

        if (this.dataVocabulary[11] == value.charAt(this.contador) && this.bandera5) {
          this.estadoActual = 41;
          this.bandera1 = false;
          this.bandera2 = false;
          this.bandera3 = false;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 13) {   // )
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[12] == value.charAt(this.contador) && !this.bandera4) {
          this.estadoActual = 14;
        } else {
          if (this.dataVocabulary[12] == value.charAt(this.contador)) {
            this.estadoActual = 26;
            this.bandera4 = false;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }

        if (this.dataVocabulary[12] == value.charAt(this.contador) && this.bandera5) {
          this.estadoActual = 26;
          this.bandera4 = false;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 14) {   // {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[15] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 15;
        } else {
          if (this.dataVocabulary[15] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 15;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 15) {   // c
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[16] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 16;
        } else {
          if (this.dataVocabulary[16] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 16;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 16) {   // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 17;
        } else {
          if (this.dataVocabulary[5] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 17;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 17) {   // n
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[0] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 18;
        } else {
          if (this.dataVocabulary[0] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 18;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 18) {   // s
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[17] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 19;
        } else {
          if (this.dataVocabulary[17] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 19;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 19) {   // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 20;
        } else {
          if (this.dataVocabulary[5] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 20;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 20) {   // l
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[18] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 21;
        } else {
          if (this.dataVocabulary[18] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 21;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 21) {   // e
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[3] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 22;
        } else {
          if (this.dataVocabulary[3] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 22;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 22) {   // .
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[19] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 23;
        } else {
          if (this.dataVocabulary[19] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 23;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 23) {   // l
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[18] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 24;
        } else {
          if (this.dataVocabulary[18] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 24;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 24) {   // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador) && !this.bandera5) {
          this.estadoActual = 25;
        } else {
          if (this.dataVocabulary[5] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 25;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        this.contador++;
      }

      if (this.estadoActual == 25) {   // g
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[20] == value.charAt(this.contador) && !this.bandera5) {
          this.bandera2 = true;
          this.estadoActual = 12;
        } else {
          if (this.dataVocabulary[20] == value.charAt(this.contador) && this.bandera5) {
            this.estadoActual = 12;
          } else {
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
          ;
        }
        this.contador++;
      }

      if (this.estadoActual == 26) {   // }
        var val = this.contador;
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[21] == value.charAt(this.contador) && value.length - 1 == this.contador && !value.charAt(val + 1)) {
          this.estadoActual = 26;
          this.bandera1 = true;
        } else {
          if (value.charAt(val + 1)) {
            this.estadoActual = 37;
            this.bandera1 = false;
            console.log('FALSE');
          } else {
            console.log(!value.charAt(val + 1));
            this.bandera1 = false;
            this.contador = value.length;
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }
        /*this.contadorProceso++;
        if (this.contadorProceso > 1) {
          this.contador = value.length;
        }*/
        this.contador++;
      }

      if (this.estadoActual == 27) {   // n
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[0] == value.charAt(this.contador)) {
          this.bandera2 = true;
          this.estadoActual = 28;
        } else {

          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 28) {   // t
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[22] == value.charAt(this.contador)) {
          this.bandera2 = true;
          this.estadoActual = 29;
        } else {
          this.contador = value.length;
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 29) {   // r
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[4] == value.charAt(this.contador)) {
          this.bandera2 = true;
          this.estadoActual = 30;
        } else {
          this.contador = value.length;
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 30) {   // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador)) {
          this.bandera1 = false;
          this.bandera2 = false;
          this.bandera3 = false;
          this.bandera4 = true;
          this.estadoActual = 41;

        } else {
          this.contador = value.length;
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 31) {   // o
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[5] == value.charAt(this.contador)) {
          this.bandera2 = true;
          this.estadoActual = 3;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }


      if (this.estadoActual == 37) {   // e
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[3] == value.charAt(this.contador)) {
          this.estadoActual = 38;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 38) {   // l
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[18] == value.charAt(this.contador)) {
          this.estadoActual = 39;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 39) {   // s
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[17] == value.charAt(this.contador)) {
          this.estadoActual = 40;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 40) {   // e
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[3] == value.charAt(this.contador)) {
          this.estadoActual = 14;
          this.bandera5 = true;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 41) {   // "
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[23] == value.charAt(this.contador) && !this.bandera4) {
          this.bandera3 = true;
          this.estadoActual = 3;
        } else {
          if (this.dataVocabulary[23] == value.charAt(this.contador) && this.bandera4) {
            this.bandera4 = true;
            this.estadoActual = 13;
          } else {
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
        }

        if (this.dataVocabulary[23] == value.charAt(this.contador) && this.bandera5) {
          this.estadoActual = 0;
          this.countData++;
          console.log('ENTER');
        }

        if (this.dataVocabulary[23] == value.charAt(this.contador) && this.countData == 2) {
          this.estadoActual = 13;
          console.log('13');
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        console.log(this.countData);
        this.contador++;
      }


      /*

            if (this.estadoActual == 7) {
              console.log(value.charAt(this.contador));
              if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
                this.estadoActual = 8;
              } else {
                this.err = this.err + ' ' + value.charAt(this.contador);
              }
              this.contador++;
            }

            if (this.estadoActual == 8) {
              console.log(value.charAt(this.contador));
              if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
                this.estadoActual = 9;
              } else {
                this.err = this.err + ' ' + value.charAt(this.contador);
              }
              this.contador++;
            }

            if (this.estadoActual == 9) {
              console.log(value.charAt(this.contador));
              if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
                this.estadoActual = 10;
              } else {
                this.err = this.err + ' ' + value.charAt(this.contador);
              }
              this.contador++;
            }

            if (this.estadoActual == 10) {
              console.log(value.charAt(this.contador));
              if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
                this.estadoActual = 11;
              } else {
                this.err = this.err + ' ' + value.charAt(this.contador);
              }
              this.contador++;
            }

            if (this.estadoActual == 11) {
              console.log(value.charAt(this.contador));
              if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && value.length - 1 == this.contador) {
                this.estadoActual = 12;
              } else {
                this.err = this.err + ' ' + value.charAt(this.contador);
              }
              this.contador++;
            }
      */


    }
    let end = performance.now();
    this.timeExecute = end - start;
    this.timeExecute = this.timeExecute.toFixed(4);
    console.log(end - start);
    console.log(this.estadoActual);
    if (this.estadoActual == this.estadoFinal[0] && this.bandera1 || this.estadoActual == this.estadoFinal[1]) {
      this.status = true;
    } else {
      if (this.err != ' ') {
        this.err = 'No se ha reconocido el siguiente patrón de simbolos: ' + this.err;
      } else {
        this.err = 'Los simbolos/caracteres ingresados son correctos, pero no concluye con respecto a la estructura correcta';
      }
    }
  }

}


/* code OK v1.0 */

/*
if (this.estadoActual == 0) {
          if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
            this.estadoActual = 1;
          }
          this.contador++;
        }

        if (this.estadoActual == 1) {
          console.log(value.charAt(this.contador));
          if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && value.length - 1 == this.contador) {
            this.estadoActual = 2;
          }
          this.contador++;
        }
 */

/* code OK v1.1
        if (this.estadoActual == 0) {
          if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
            this.estadoActual = 1;
          } else {
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
          this.contador++;
        }

        if (this.estadoActual == 1) {
          console.log(value.charAt(this.contador));
          if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
            this.estadoActual = 2;
          } else {
            this.err = this.err + ' ' + value.charAt(this.contador);
          }
          this.contador++;
        }

      if (this.estadoActual == 2) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 3;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 3) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 4;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 4) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 5;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 5) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 6;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 6) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 7;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 7) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 8;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 8) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 9;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 9) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 10;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 10) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador)) {
          this.estadoActual = 11;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }

      if (this.estadoActual == 11) {
        console.log(value.charAt(this.contador));
        if (this.dataVocabulary[this.contador] == value.charAt(this.contador) && value.length - 1 == this.contador) {
          this.estadoActual = 12;
        } else {
          this.err = this.err + ' ' + value.charAt(this.contador);
        }
        this.contador++;
      }


 */
