import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatDividerModule, CommonModule, MatButton, MatIcon],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gamesHome: any = [];

  constructor(private httpClient:HttpClient){
    this.httpClient.get("gamesHome.json").subscribe(data => {
      this.gamesHome = data;
    })
  }

}

export interface GameInfo {
  number: String;
  gameType: String;
  title: String;
  role: String;
  description: String;
}
