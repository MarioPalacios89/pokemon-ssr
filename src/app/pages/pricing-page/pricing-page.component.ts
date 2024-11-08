import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent {
  private title = inject(Title);
  private meta=inject(Meta);
  private platform=inject(PLATFORM_ID);

     ngOnInit(): void {
//       if(isPlatformBrowser(this.platform)){
//  document.title = 'Pricing';
//       }

       this.title.setTitle('Pricing');
       this.meta.updateTag({ name: 'description', content: 'Esta es mi pricing page' });
       this.meta.updateTag({ name: 'og:title', content: 'Esta es mi pricing page' });
       this.meta.updateTag({ name: 'keywords', content: 'Hola, Indim,BCP,Angular' });
     }
}
