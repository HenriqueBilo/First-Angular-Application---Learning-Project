import { Component } from '@angular/core';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MenuComponent, FooterComponent, RouterOutlet,
  ],
  providers: [ProductService],
})
export class AppComponent {
  title = 'LittleStore';
}
