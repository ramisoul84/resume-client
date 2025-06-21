import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    { 
        path: 'auth',
        loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
    },
    { 
        path: 'todo',
        loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoComponent)
    },
    { 
        path: 'weather',
        loadComponent: () => import('./pages/weather/weather.component').then(m => m.WeatherComponent)
    },
    { 
        path: 'social',
        loadComponent: () => import('./pages/social/social.component').then(m => m.SocialComponent)
    },
    { 
        path: 'info',
        loadComponent: () => import('./pages/info/info.component').then(m => m.InfoComponent)
    },
    { path: '**', redirectTo: '' },
];
