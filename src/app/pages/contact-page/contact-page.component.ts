import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent {
  private title = inject(Title);
  private meta=inject(Meta);

     ngOnInit(): void {
       this.title.setTitle('Contact');
       this.meta.updateTag({ name: 'description', content: 'Esta es mi contact page' });
       this.meta.updateTag({ name: 'og:title', content: 'Esta es mi contact page' });
       this.meta.updateTag({ name: 'keywords', content: 'Hola, Indim,BCP,Angular' });
     }
}
