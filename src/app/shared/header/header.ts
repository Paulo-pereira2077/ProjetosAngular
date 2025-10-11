import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
exibirLogo:boolean = true;
 itensMenu = [
 { label: 'Home', link: '' },
 { label: 'Cadastro', link: '/pessoas/incluir' },
 { label: 'Login', link: '/pessoas/login' },
 { label: 'Sobre', link: '/sobre' },
 ]
}
