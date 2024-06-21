import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() h1Text: string = ''; // Définir une propriété d'entrée avec une valeur par défaut
}
