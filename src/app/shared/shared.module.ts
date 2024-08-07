import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
