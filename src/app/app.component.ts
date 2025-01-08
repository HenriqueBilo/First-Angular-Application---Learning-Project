import { Component } from '@angular/core';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, HomeComponent, FooterComponent],
})
export class AppComponent {
  title = 'LittleStore';
}
