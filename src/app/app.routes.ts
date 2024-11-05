// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const appRoutes: Routes = [{ path: '', component: PokemonComponent }];
