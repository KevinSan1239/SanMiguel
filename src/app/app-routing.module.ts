import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { DevolucionesComponent } from './Components/devoluciones/devoluciones.component';
import { facturasComponent } from './Components/facturas/facturas.component';
import { InventariosComponent } from './Components/inventarios/inventarios.component';
import { ProductosComponent } from './Components/productos/productos.component';
// import { TablaComponent } from './Components/tabla/tabla.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

const routes: Routes = [
  {path:"clientes",component:ClientesComponent},
  {path:"usuarios",component:UsuariosComponent},
  {path:"inventarios",component:InventariosComponent},
  {path:"productos",component:ProductosComponent},
  {path:"devoluciones",component:DevolucionesComponent},
  // {path:"tabla",component:TablaComponent},
  // {path:"formulario",component:FormComponent},
  {path:"facturas",component:facturasComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




