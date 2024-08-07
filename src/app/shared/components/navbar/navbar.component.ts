import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
ngOnInit(): void {
  $('[data-widget="treeview"]').Treeview('init');
}
}
