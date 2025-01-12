import { Component } from '@angular/core';

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
    preview: string;
  };
}


@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'SVGL - A beautiful library with SVG logos',
      description: 'Library of SVG logos from the most popular brands.',
      stats: '+10k visits per month. +2K SVGs downloaded. Created from scratch with Next.js, React, and Tailwind CSS.',
      image: '/images/HospitalApp.png',
      image2: '/images/HospitalApp2.png',
      image3: '/images/HospitalApp3.png',
      technologies: ['Next.js', 'Tailwind CSS'],
      links: {
        code: 'https://github.com/username/svgl',
        preview: 'https://svgl.example.com'
      }
    },
    {
      title: 'AdventJS - Programming challenges with JavaScript and TypeScript',
      description: 'Free platform with programming challenges.',
      stats: 'Over 1 million visits in a month. +50K challenges completed. Created from scratch with Next.js, React, and Tailwind CSS.',
      image: '/images/Abarroteria.png',
      image2: '/images/Abarroteria2.png',
      image3: '/images/Abarroteria3.png',
      technologies: ['Next.js', 'Tailwind CSS'],
      links: {
        preview: 'https://adventjs.example.com'
      }
    }
  ];

  currentSlides: { [key: string]: number } = {};

  constructor() {
    this.projects.forEach(project => {
      this.currentSlides[project.title] = 0; // Inicializa cada carrusel en la primera imagen
    });
  }

  nextSlide(project: Project): void {
    const images = [project.image, project.image2, project.image3];
    this.currentSlides[project.title] = (this.currentSlides[project.title] + 1) % images.length;
    this.updateSlider(project);
  }

  prevSlide(project: Project): void {
    const images = [project.image, project.image2, project.image3];
    this.currentSlides[project.title] = (this.currentSlides[project.title] - 1 + images.length) % images.length;
    this.updateSlider(project);
  }

  updateSlider(project: Project): void {
    const slider = document.querySelector(`.slider`) as HTMLElement;
    slider.style.transform = `translateX(-${this.currentSlides[project.title] * 100}%)`;
  }

}
