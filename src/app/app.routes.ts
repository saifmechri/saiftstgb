import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    {
        path:'acceuil',
       component: AccueilComponent
     
      },
      {
       path:'connexion',
       component: ConnexionComponent
      },
      {
       path:'inscription',
       component: InscriptionComponent
      }
     
];
