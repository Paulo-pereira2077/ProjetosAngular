import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',  
  styleUrls: ['./app.css']
})
export class App {
 titulo = 'Olá Paulo';
 nome = 'Bem-vindos ao angular!';
 textoBotao: string = 'Clique aqui!';
 botaoDesabilitado: boolean = false;
 keypress: boolean = false;
 mensagem: string = '';
 
 onbotaoClicado() {
  this.mensagem = 'Você clicou no botão!'
 }

 onKeyPressed() {
  this.mensagem = 'Digitando Texto'
 }
 
}
