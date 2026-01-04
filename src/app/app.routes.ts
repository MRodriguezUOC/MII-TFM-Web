import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
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
        { path: 'game',
          component: Game,
          title: 'Juego'
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

