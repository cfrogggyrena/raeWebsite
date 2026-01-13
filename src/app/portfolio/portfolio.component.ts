import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MatButton } from '@angular/material/button';
// import { MatIcon } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatGridListModule, MatDividerModule, CommonModule, MatCard],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
