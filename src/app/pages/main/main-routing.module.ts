import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './categories-page/categories-page.component';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { MainComponent } from './main.component';
import { StudentsPageComponent } from './students-page/students-page.component';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: 'categories', component: CategoriesPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'students', component: StudentsPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
