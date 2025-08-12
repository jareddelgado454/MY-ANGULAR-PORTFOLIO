import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-portfolio';
  constructor(private router: Router) {
  }
  ngOnInit() {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => window.HSStaticMethods.autoInit(), 100);
        }
      });
  }
}
