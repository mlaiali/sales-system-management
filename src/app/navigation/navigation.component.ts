import { Component } from '@angular/core';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  imports: [NgbDropdownModule, MatIconModule, MatToolbarModule],
  standalone: true,
})
export class NavigationComponent {

}
