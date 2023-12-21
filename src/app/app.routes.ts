import { Router, RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'result', component: AppComponent},
    {path: 'search', component: SearchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)] 
})

export class AppRoutingModule {}
