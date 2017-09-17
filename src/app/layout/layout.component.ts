import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'pz-layout',
  template: `
    <pz-main-header></pz-main-header>
    <pz-main-content></pz-main-content>
    <pz-main-footer></pz-main-footer>
  `,
  styles: []
})
export class LayoutComponent {
}
