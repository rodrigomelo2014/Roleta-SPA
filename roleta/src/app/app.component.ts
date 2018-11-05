import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roleta';
  result: number;
  girar = false;
  apostas: Aposta[] =[];
  htmlAdd;
  app;
  premio=0;

  constructor(){}
  ngOnInit(){}

  addApostas(aposta:string){
    this.app = new Aposta();
    this.app.tipoAposta = aposta;
    this.app.valor = 0;
    this.apostas.push(this.app);
  }
  
  runRoulette(){
    return new Promise(resolve => {
      this.girar=true;
      setTimeout(() => {
        this.result = Math.floor(Math.random()*37);
        this.girar=false;
        this.premio=0;
        this.calcularPremio(this.result);
        this.apostas= [];
      }, 5000);
    });
  }

  calcularPremio(resultado:number){
    for(let aposta of this.apostas){
      if(resultado == 0){
        if(aposta.tipoAposta=="0"){
          this.premio+=aposta.valor*36;
        }
      }
      else if(resultado == 1){
        if(aposta.tipoAposta=="1"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 2){
        if(aposta.tipoAposta=="2"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 3){
        if(aposta.tipoAposta=="3"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 4){
        if(aposta.tipoAposta=="4"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 5){
        if(aposta.tipoAposta=="5"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 6){
        if(aposta.tipoAposta=="6"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 7){
        if(aposta.tipoAposta=="7"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 8){
        if(aposta.tipoAposta=="8"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 9){
        if(aposta.tipoAposta=="9"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 10){
        if(aposta.tipoAposta=="10"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 11){
        if(aposta.tipoAposta=="11"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 12){
        if(aposta.tipoAposta=="12"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia1"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 13){
        if(aposta.tipoAposta=="13"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 14){
        if(aposta.tipoAposta=="14"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 15){
        if(aposta.tipoAposta=="15"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 16){
        if(aposta.tipoAposta=="16"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 17){
        if(aposta.tipoAposta=="17"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 18){
        if(aposta.tipoAposta=="18"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade1"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 19){
        if(aposta.tipoAposta=="19"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 20){
        if(aposta.tipoAposta=="20"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 21){
        if(aposta.tipoAposta=="21"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 22){
        if(aposta.tipoAposta=="22"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 23){
        if(aposta.tipoAposta=="23"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 24){
        if(aposta.tipoAposta=="24"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia2"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 25){
        if(aposta.tipoAposta=="25"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 26){
        if(aposta.tipoAposta=="26"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 27){
        if(aposta.tipoAposta=="27"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 28){
        if(aposta.tipoAposta=="28"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 29){
        if(aposta.tipoAposta=="29"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 30){
        if(aposta.tipoAposta=="30"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 31){
        if(aposta.tipoAposta=="31"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 32){
        if(aposta.tipoAposta=="32"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 33){
        if(aposta.tipoAposta=="33"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 34){
        if(aposta.tipoAposta=="34"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna3"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 35){
        if(aposta.tipoAposta=="35"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="preto"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="impar"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna2"){
        this.premio+=aposta.valor*3;
       }
      }
      else if(resultado == 36){
        if(aposta.tipoAposta=="36"){
          this.premio+=aposta.valor*36;
        }
        else if(aposta.tipoAposta=="duzia3"){
          this.premio+=aposta.valor*3;
        }
        else if(aposta.tipoAposta=="vermelho"){
          this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="par"){
        this.premio+=aposta.valor*2;
        }
       else if(aposta.tipoAposta=="metade2"){
        this.premio+=aposta.valor*2;
       }
       else if(aposta.tipoAposta=="coluna1"){
        this.premio+=aposta.valor*3;
       }
      }
    }
  }
}
export class Aposta {
  tipoAposta:string;
  valor: number;
}
