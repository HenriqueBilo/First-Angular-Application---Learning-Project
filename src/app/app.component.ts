import { Component } from '@angular/core';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MenuComponent, FooterComponent, RouterOutlet
  ],
})
export class AppComponent {
  title = 'LittleStore';
}
