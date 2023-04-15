import {Component, ElementRef, ViewChild} from '@angular/core';
import { NgModule} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {LayoutService} from "src/app/core/admin/layout/service/app.layout.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
@NgModule({
imports : [
    RouterModule,
], })

export class TopbarComponent {


    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public LayoutService: LayoutService) { }
}
