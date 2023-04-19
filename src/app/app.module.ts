import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { MenuComponent } from '../app/Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DevolucionesComponent } from './Components/devoluciones/devoluciones.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { facturasComponent,} from './Components/facturas/facturas.component';
import { InventariosComponent } from './Components/inventarios/inventarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    MenuComponent,
    DevolucionesComponent,
    ProductosComponent,
    UsuariosComponent,
    facturasComponent,
    InventariosComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AvatarModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
