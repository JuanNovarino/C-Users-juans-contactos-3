import { Routes } from '@angular/router';
import { Andaporfavor } from './pages/andaporfavor/andaporfavor';
import { Contactos } from './pages/contactos/contactos';
import { DetallesContactos } from './pages/detalles-contactos/detalles-contactos';
import { Registro } from './pages/registro/registro';
import { Logged } from './layout/logged/logged';
//import { GroupsPage } from './pages/groups/groups';
import { NuevoContactoEditado } from './pages/nuevo-contacto-editado/nuevo-contacto-editado';

export const routes: Routes = [
    
    {
        path: "andaporfavor",
        component: Andaporfavor
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
        //canActivate: [onlyPublicUserGuard]
        children:
        [
                 { 
                     path: "",
                     component: Contactos
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
    },
];
