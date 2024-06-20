import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'book', component: BookComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

export default routes;
