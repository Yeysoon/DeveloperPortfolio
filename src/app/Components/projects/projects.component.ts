// projects.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  stats: string;
  image: string;
  image2: string;
  image3: string;
  technologies: string[];
  links: {
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
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      title: 'Hospital Aplication API RESTful (Project University)',
      description: 'Responsiva para la gestion administrativa de un hospital.',
      stats: 'Aplicación web construida con tecnologias Java, Spring Boot, Bootstrap, SweetAlert, Angular CLI, CSS, HTML, TypeScript Postgre SQL.',
      image: '/images/HospitalApp.png',
      image2: '/images/HospitalApp2.png',
      image3: '/images/HospitalApp3.png',
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
      image: '/images/Abarroteria.png',
      image2: '/images/Abarroteria2.png',
      image3: '/images/Abarroteria3.png',
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

  ngOnDestroy() {
    Object.values(this.intervalIds).forEach(id => clearInterval(id));
  }

  private startAutoSlide(project: Project) {
    this.intervalIds[project.title] = setInterval(() => {
      this.currentSlides[project.title] = (this.currentSlides[project.title] + 1) % 3;
    }, 3000);
  }
}
