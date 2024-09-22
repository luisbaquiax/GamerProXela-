import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RealizarVentaComponent } from './components/cajero/realizar-venta/realizar-venta.component';
import { CustomersComponent } from './components/cajero/customers/customers.component';
import { CreateUsersComponent } from './components/admin/create-users/create-users.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AdminCustomersComponent } from './components/admin/admin-customers/admin-customers.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuCajeroComponent } from './components/cajero/menu-cajero/menu-cajero.component';
import { ReportesComponent } from './components/admin/reportes/reportes.component';
import { ProductosComponent } from './components/cajero/productos/productos.component';
import { BodegaProductosComponent } from './components/bodega/bodega-productos/bodega-productos.component';
import { BodegaMenuComponent } from './components/bodega/bodega-menu/bodega-menu.component';
import { BodegaRegistroProductComponent } from './components/bodega/bodega-registro-product/bodega-registro-product.component';
import { MenuInventarioComponent } from './components/inventario/menu-inventario/menu-inventario.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RealizarVentaComponent,
    CustomersComponent,
    CreateUsersComponent,
    UsersComponent,
    AdminCustomersComponent,
    AdminMenuComponent,
    MenuCajeroComponent,
    ReportesComponent,
    ProductosComponent,
    BodegaProductosComponent,
    BodegaMenuComponent,
    BodegaRegistroProductComponent,
    MenuInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
