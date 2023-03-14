import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { DevolucionesComponent } from './Components/devoluciones/devoluciones.component';
import { FacturasComponent } from './Components/facturas/facturas.component';
import { FormComponent } from './Components/form/form.component';
import { InventariosComponent } from './Components/inventarios/inventarios.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

const routes: Routes = [

    {path:"facturas",component:FacturasComponent},
    {path:"clientes",component:ClientesComponent},
    {path:"usuarios",component:UsuariosComponent},
    {path:"inventarios",component:InventariosComponent},
    {path:"productos",component:ProductosComponent},
    {path:"devoluciones",component:DevolucionesComponent},
    {path:"tabla",component:TablaComponent},
    {path:"formulario",component:FormComponent},
    {path:"personas",component:PersonasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
