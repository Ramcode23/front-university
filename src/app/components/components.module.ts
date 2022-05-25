import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../modules/material/material.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from '../pages/main/main-routing.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    NavComponent,
    MenuItemComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MainRoutingModule

  ],
  exports: [
    LoginFormComponent,
     RegisterFormComponent,
MenuItemComponent,

  ]
})
export class ComponentsModule { }
