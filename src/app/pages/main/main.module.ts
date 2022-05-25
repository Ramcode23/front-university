import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { StudentsPageComponent } from './students-page/students-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    MainComponent,
    CategoriesPageComponent,
    StudentsPageComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class MainModule { }
