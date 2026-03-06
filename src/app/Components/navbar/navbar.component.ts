import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    this.onWindowScroll();
  }

  ngAfterViewInit(): void {
    this.runAnimations();
  }

  private runAnimations(): void {
    // Logo fade in from left
    anime({
      targets: '.logo',
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 700,
      easing: 'easeOutCubic'
    });

    // Nav items stagger from left to right
    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 500,
      delay: anime.stagger(100, { start: 200 }),
      easing: 'easeOutCubic'
    });

    // Download button fade in from right
    anime({
      targets: '.download-btn',
      opacity: [0, 1],
      translateX: [20, 0],
      duration: 700,
      delay: 600,
      easing: 'easeOutCubic'
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.nav-container');
    if (navbar) {
      if (window.pageYOffset > 1) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    }
  }

}
