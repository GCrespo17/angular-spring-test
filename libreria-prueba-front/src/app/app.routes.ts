import { Routes } from '@angular/router';
import {routes as authRoutes} from './auth/auth.routers';

import { BooksComponent } from './books/books.component';
import { AuthComponent } from './auth/auth.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo:'/Todo',
        pathMatch:"full",
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: authRoutes,
    },
    {
        path: ':genero',
        component: BooksComponent,
    },
    
    
    
];
