import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes=[
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'products', component: ListComponent},
    {path: 'products/new', component: CreateComponent},
    {path: 'products/edit/:id', component: EditComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);