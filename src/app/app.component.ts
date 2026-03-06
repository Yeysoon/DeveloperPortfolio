import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'DeveloperPortfolio';
  @ViewChild('starsCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
  private animationFrameId: number = 0;
  private resizeHandler: (() => void) | null = null;

  ngAfterViewInit(): void {
    this.initStars();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private initStars(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.setCanvasSize(canvas);

    // Create stars
    const starCount = Math.floor((canvas.width * canvas.height) / 8000);
    this.stars = [];
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.0005 + 0.0002
      });
    }

    // Animate star twinkling with anime.js
    this.stars.forEach((star) => {
      anime({
        targets: star,
        opacity: [
          { value: Math.random() * 0.3 + 0.1, duration: Math.random() * 3000 + 2000 },
          { value: Math.random() * 0.8 + 0.4, duration: Math.random() * 3000 + 2000 }
        ],
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      });
    });

    // Start render loop
    this.renderStars(canvas);

    // Handle resize
    this.resizeHandler = () => {
      this.setCanvasSize(canvas);
    };
    window.addEventListener('resize', this.resizeHandler);
  }

  private setCanvasSize(canvas: HTMLCanvasElement): void {
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight || window.innerHeight;
  }

  private renderStars(canvas: HTMLCanvasElement): void {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.stars.forEach((star) => {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fill();

      // Add a very subtle glow for bigger stars
      if (star.radius > 1) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(180, 200, 255, ${star.opacity * 0.15})`;
        this.ctx.fill();
      }
    });

    this.animationFrameId = requestAnimationFrame(() => this.renderStars(canvas));
  }
}
