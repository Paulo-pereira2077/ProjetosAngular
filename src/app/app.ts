import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { FormsModule } from '@angular/forms';
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, FormsModule, Footer],
  templateUrl: './app.html',  
  styleUrls: ['./app.css']
})
export class App {
  titulo = 'Alunos'
 nome = ''
 sobrenome = '';
 cidade = '';
 textoBotao: string = 'Clique aqui!';
 botaoDesabilitado: boolean = true;
 mensagem: string = ''; 
 onBotaoClicado() {
  console.log(this.nome)  
  alert(`Olá ${this.nome} ${this.sobrenome} !`) ;
  }
 onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  } 
 
}
