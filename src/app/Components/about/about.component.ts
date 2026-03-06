import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.runAnimations();
  }

  private runAnimations(): void {
    // Profile pic - fade + scale
    anime({
      targets: '.about-me-container .profile-pic',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: 'easeOutCubic'
    });

    // Title "Acerca de mí" - slide from right
    anime({
      targets: '.about-me-content h2',
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 700,
      delay: 200,
      easing: 'easeOutCubic'
    });

    // Paragraphs - stagger fade-in
    anime({
      targets: '.about-me-content p',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      delay: anime.stagger(200, { start: 400 }),
      easing: 'easeOutCubic'
    });
  }
}
