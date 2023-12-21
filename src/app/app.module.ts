import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
    {path: "search", component: SearchComponent},
    {path: "app", component: AppComponent}
]

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), AppComponent, SearchComponent]
})

export class AppModule {}