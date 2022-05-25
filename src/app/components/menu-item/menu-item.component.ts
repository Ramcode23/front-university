import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/routes/AppRoutes';
import { MenuIcons } from 'src/app/types/MenuIcons';
import { MenuItem } from 'src/app/types/MenuItem.type';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItems:MenuItem[] = [
{
  name: 'Courses',
  icon: MenuIcons.COURSES,
  path: AppRoutes.COURSES
},
{
  name: 'Students',
  icon: MenuIcons.STUDENTS,
  path: AppRoutes.STUDENTS
},
{
  name: 'Categories',
  icon: MenuIcons.CATEGORIES,
  path: AppRoutes.CATEGORIES
},
{
  name: 'Logout',
  icon: MenuIcons.LOGOUT,
  path: AppRoutes.LOGOUT
}


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
