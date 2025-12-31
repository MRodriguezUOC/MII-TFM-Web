import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { Downloads } from './pages/downloads/downloads';
import { Scores } from './pages/scores/scores';

export const routes: Routes = [
    { path: '', 
      component: Layout,
      children: [
        { path: '',
          component: Home,
          title: 'Home'
        },
        { path: 'downloads',
          component: Downloads,
          title: 'Descargas'
        },        
        { path: 'scores',
          component: Scores,
          title: 'Clasificación'
        },        
      ]
    },
    { path: '**',
      redirectTo: ''
    }
];

