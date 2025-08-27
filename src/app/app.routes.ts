import { Routes } from '@angular/router';
import { Andaporfavor } from './pages/andaporfavor/andaporfavor';
import { Contactos } from './pages/contactos/contactos';
import { DetallesContactos } from './pages/detalles-contactos/detalles-contactos';
import { Registro } from './pages/registro/registro';
import { Logged } from './layout/logged/logged';

export const routes: Routes = [
    
    {
        path: "andaporfavor",
        component: Andaporfavor

    },


    {
        path: "registro",
        component: Registro
    },

    {
        path: "",
        component: Logged,
        children:
        [
                 { 
                     path: "contactos",
                     component: Contactos
                 },

                 {
                    path: "detalles-contactos",
                    component: DetallesContactos
                 },
        ]
    },
];
