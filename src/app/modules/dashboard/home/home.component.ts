import { Component } from '@angular/core';
import { SeoService } from '../../../common/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private seoService: SeoService) {
    const content =
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';
    const title = 'angular-seo Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
}
