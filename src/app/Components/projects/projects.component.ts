// projects.component.ts
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

export interface Project {
  title: string;
  description: string;
  stats: string;
  images: string[];
  technologies: string[];
  links: {
    preview?: string;
    code?: string;
    code2?: string;
  };
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  projects: Project[] = [
    {
      title: 'Landing Page | Nacionales Delivery Services',
      description: 'Landing page oficial de empresa de servicios de delivery a nivel nacional, construida con metodología Vibe Coding.',
      stats: 'Sitio web desarrollado con React 18, Vite, TailwindCSS, EmailJS, React Router DOM, AnimeJS, Lucide React y desplegado en Vercel.',
      images: [
        '/images/NDS1.png',
        '/images/NDS2.png',
        '/images/NDS3.png',
        '/images/NDS4.png',
        '/images/NDS5.png',
        '/images/NDS6.png',
        '/images/NDS7.png',
        '/images/NDS8.png',
      ],
      technologies: ['React 18', 'Vite', 'TailwindCSS', 'EmailJS', 'Vercel'],
      links: {
        preview: 'https://nacionalesdeliveryservices.com/',
        code2: 'https://github.com/implementacionnacionalesds2026/NacionalesDeliveryServicesWeb',
      }
    },
    {
      title: 'SIGLAD Aplication API RESTful (Project University)',
      description: 'Responsiva para la gestion aduanal de comercio internacional.',
      stats: 'Aplicación web construida con tecnologias Express, Java Script, CSS, AnimeJs, Sweet Alert, Postgre SQL, Render',
      images: ['/images/SIGLADLOGIN.png', '/images/SIGLADDUCAS.jpg', '/images/SIGLADADMIN.jpg'],
      technologies: ['Express', 'Postgre SQL', 'AnimeJs', 'Java Script'],
      links: {
        preview: 'https://siglad-proyectowebapp.onrender.com/',
        code2: 'https://github.com/Yeysoon/SIGLAD-ProyectoWebApp',
      }
    },
    {
      title: 'Hospital Aplication API RESTful (Project University)',
      description: 'Responsiva para la gestion administrativa de un hospital.',
      stats: 'Aplicación web construida con tecnologias Java, Spring Boot, Bootstrap, SweetAlert, Angular CLI, CSS, HTML, TypeScript Postgre SQL.',
      images: ['/images/HospitalApp.png', '/images/HospitalApp2.png', '/images/HospitalApp3.png'],
      technologies: ['Angular CLI', 'Postgre SQL', 'Spring Boot', 'Java SE'],
      links: {
        code: 'https://github.com/Yeysoon/Proyecto-Java-Angular-Hospital',
        code2: 'https://github.com/Yeysoon/Proyecto-Java-Spring-Hospital',
      }
    },
    {
      title: 'MaxiAbarrotes with JSP Java SE (Project University)',
      description: 'Aplicación Web de Abarrotería con Integración Java, Maven y MySQL',
      stats: 'Aplicacion web onstruida con tecnologias Java SE, Maven, Bootstrap, Tomcat, CSS, HTML, JSP(Java Server Pages), MySQL',
      images: ['/images/Abarroteria.png', '/images/Abarroteria2.png', '/images/Abarroteria3.png'],
      technologies: ['Java SE', 'Bootstrap', 'Maven', 'MySQL', 'Tomcat'],
      links: {
        code2: 'https://github.com/Yeysoon/Proyecto-Abarroteria-Java-Maven-MYSQL',
      }
    }
  ];

  currentSlides: { [key: string]: number } = {};
  private intervalIds: { [key: string]: any } = {};

  constructor() {
    this.projects.forEach(project => {
      this.currentSlides[project.title] = 0;
    });
  }

  ngOnInit() {
    this.projects.forEach(project => {
      this.startAutoSlide(project);
    });
  }

  ngAfterViewInit(): void {
    this.runAnimations();
  }

  ngOnDestroy() {
    Object.values(this.intervalIds).forEach(id => clearInterval(id));
  }

  private startAutoSlide(project: Project) {
    this.intervalIds[project.title] = setInterval(() => {
      this.currentSlides[project.title] = (this.currentSlides[project.title] + 1) % project.images.length;
    }, 3000);
  }

  private runAnimations(): void {
    // Title
    anime({
      targets: '.projects-title',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 700,
      easing: 'easeOutCubic'
    });

    // Project cards - scale + fade stagger
    anime({
      targets: '.project-card',
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [30, 0],
      duration: 800,
      delay: anime.stagger(200, { start: 300 }),
      easing: 'easeOutCubic'
    });

    // Technology badges - stagger
    anime({
      targets: '.technology-badge',
      opacity: [0, 1],
      scale: [0.7, 1],
      duration: 400,
      delay: anime.stagger(40, { start: 800 }),
      easing: 'easeOutBack'
    });
  }
}
