import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PessoaLogin } from './pages/pessoa-login/pessoa-login';
import { PessoaListagem } from './pages/pessoa-listagem/pessoa-listagem';
import { PessoaForm } from './pages/pessoa-form/pessoa-form';
 
export const routes: Routes = [
 {
 path: '',
 component: Home,
 title: 'Home',
 },
 {
        path: 'pessoas',
        component: PessoaListagem,
        title: 'Pessoas',
    },
    {
        path: 'pessoas/incluir',
        component: PessoaForm,
        title: 'Pessoas - Incluir',
    },
    {
        path: 'pessoas/alterar/:id',
        component: PessoaForm,
        title: 'Pessoas - Alterar',
    },
    {
        path: 'pessoas/login',
        component: PessoaLogin,
        title: 'Login',
    },
];