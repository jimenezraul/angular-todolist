import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router"; // Import RouterModule

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { HeaderComponent } from "./shared/header/header.component";
import { ContainerComponent } from "./shared/container/container.component";
import { TodosComponent } from "./shared/todos/todos.component";
import { TodoDetailComponent } from "./shared/todo-detail/todo-detail.component";
import { ModalComponent } from "./shared/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./pages/home/home.component";

// Define routes
const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        ContainerComponent,
        TodosComponent,
        TodoDetailComponent,
        ModalComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes), // Register routes
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
