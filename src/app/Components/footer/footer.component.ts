import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  public currentYear: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  ngAfterViewInit(): void {
    this.runAnimations();
  }

  private runAnimations(): void {
    // Footer left content - fade in
    anime({
      targets: '.footer-left',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 700,
      easing: 'easeOutCubic'
    });

    // Footer social icons - stagger
    anime({
      targets: '.footer-right .social-icon',
      opacity: [0, 1],
      translateY: [10, 0],
      scale: [0.8, 1],
      duration: 500,
      delay: anime.stagger(100, { start: 300 }),
      easing: 'easeOutCubic'
    });
  }
}
