import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeysoon', icon: '/icons/Github.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yeysoon/', icon: '/icons/Linkedin.png' },
    { name: 'YouTube', url: 'https://www.youtube.com/@yeysoon', icon: '/icons/Youtube.png' },
    { name: 'WhatsApp', url: 'https://wa.me/+50246402539', icon: '/icons/Whatsapp.png' },
    { name: 'Facebook', url: 'https://www.facebook.com/Yeysoonn/', icon: '/icons/Facebook.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/yeyson_hernandez_/', icon: '/icons/Instagram.png' },
    { name: 'Twitch', url: 'https://www.twitch.tv/yeysoon', icon: '/icons/Twitch.png' },
    { name: 'Discord', url: 'https://discord.gg/fnVQsD2x', icon: '/icons/Discord.png' }
  ];

  ngAfterViewInit(): void {
    this.runAnimations();
  }

  private runAnimations(): void {
    // Profile picture - fade + scale
    anime({
      targets: '.profile-pic',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      easing: 'easeOutCubic'
    });

    // Title "Hola Soy Yeysoon"
    anime({
      targets: '.about-me-content h1',
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 800,
      delay: 200,
      easing: 'easeOutCubic'
    });

    // "Disponible para trabajar" badge
    anime({
      targets: '.disponible-boton',
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 600,
      delay: 500,
      easing: 'easeOutBack'
    });

    // Subtitle h3
    anime({
      targets: '.about-me-content h3',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 700,
      delay: 400,
      easing: 'easeOutCubic'
    });

    // Bio paragraphs - stagger
    anime({
      targets: '.home-content p',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      delay: anime.stagger(150, { start: 600 }),
      easing: 'easeOutCubic'
    });

    // Social icons - stagger from bottom
    anime({
      targets: '.social-icons li',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 500,
      delay: anime.stagger(80, { start: 800 }),
      easing: 'easeOutCubic'
    });

    // Skill buttons - wave stagger
    anime({
      targets: '.categoria-btn',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 500,
      delay: anime.stagger(50, { start: 1000, grid: [5, 4], from: 'center' }),
      easing: 'easeOutCubic'
    });

    // License section
    anime({
      targets: '.licence-title',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 700,
      delay: 1200,
      easing: 'easeOutCubic'
    });

    // License items - stagger
    anime({
      targets: '.license-item',
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 700,
      delay: anime.stagger(200, { start: 1400 }),
      easing: 'easeOutCubic'
    });
  }
}
