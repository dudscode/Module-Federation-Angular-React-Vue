import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatTabsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private links = {
    Home: '/mfe-angular',
    Masculino: '/mfe-react',
    Feminino: '/mfe-vue'
  }

  constructor( private router: Router){};

  ngOnInit(): void {
    this.router.navigate([this.links.Home]) 
  }

  tabSelect(event: MatTabChangeEvent){
    const link = this.links[event.tab.textLabel]
    this.router.navigate([link])
  }
}
