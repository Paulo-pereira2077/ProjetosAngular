import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
 import { PessoaLogin } from './pages/pessoa-login/pessoa-login.component';
export const routes: Routes = [
 {
 path: '',
 component: Home,
 title: 'Home',
 },
 {
 path: 'pessoas/login',
 } 
];