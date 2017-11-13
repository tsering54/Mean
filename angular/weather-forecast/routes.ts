import { LandingComponent } from './landing/landing.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent , pathMatch: 'full' },
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanJoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'washington', component: WashingtonComponent },
    { path: 'chicago', component: ChicagoComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
