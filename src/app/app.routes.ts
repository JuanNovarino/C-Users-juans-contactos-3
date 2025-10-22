import { Routes } from '@angular/router';
import { Login } from './pages/andaporfavor/login';
import { Contactos } from './pages/contactos/contactos';
import { DetallesContactos } from './pages/detalles-contactos/detalles-contactos';
import { Registro } from './pages/registro/registro';
import { Logged } from './layout/logged/logged';
//import { GroupsPage } from './pages/groups/groups';
import { NuevoContactoEditado } from './pages/nuevo-contacto-editado/nuevo-contacto-editado';
import { loggedUserGuardGuard } from './app/logged-user-guard-guard';
import { onlyLoggedUserGuardGuard } from './guard/guards/only-logged-user-guard-guard';

export const routes: Routes = [
    
    {
        path: "login",
        component: Login
        //canActivate: [onlyPublicUserGuard]

    },


    {
        path: "registro",
        component: Registro
        //canActivate: [onlyPublicUserGuard]
    },

    {
        path: "",
        component: Logged,
        canActivateChild: [onlyLoggedUserGuardGuard],
        children:
        [
                 { 
                     path: "",
                     redirectTo: "contacts",
                     pathMatch:"full",
                    
                 },
                 {
                    path: "contacts",
                    component : Contactos
                 },

                 {
                    path: "contacts/new",
                    component: NuevoContactoEditado
                 },

                 {
                    path: "contacts/:idContacto",
                    component: DetallesContactos
                 },

                 {
                     path: "contacts/:idContacto/edit",
                     component: NuevoContactoEditado
                 },

                 //falta grupos 
        ]
        
    }
];
