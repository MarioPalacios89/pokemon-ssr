import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutPageComponent implements OnInit {
 private title = inject(Title);
 private meta=inject(Meta);

    ngOnInit(): void {
      this.title.setTitle('About');
      this.meta.updateTag({ name: 'description', content: 'Esta es mi about page' });
      this.meta.updateTag({ name: 'og:title', content: 'Esta es mi about page' });
      this.meta.updateTag({ name: 'keywords', content: 'Hola, Indim,BCP,Angular' });
    }
}
