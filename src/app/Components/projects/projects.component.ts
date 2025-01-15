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
      title: 'SVGL - A beautiful library with SVG logos',
      description: 'Library of SVG logos from the most popular brands.',
      stats: '+10k visits per month. +2K SVGs downloaded. Created from scratch with Next.js, React, and Tailwind CSS.',
      image: '/images/HospitalApp.png',
      image2: '/images/HospitalApp2.png',
      image3: '/images/HospitalApp3.png',
      technologies: ['Next.js', 'Tailwind CSS'],
      links: {
        code: 'https://github.com/username/svgl',
        code2: 'https://github.com/username/svgl',
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
        code: 'https://github.com/username/svgl',
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
