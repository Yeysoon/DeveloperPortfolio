import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  stats: string;
  image: string;
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
      image: '/assets/svgl-preview.png',
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
      image: '/assets/adventjs-preview.png',
      technologies: ['Next.js', 'Tailwind CSS'],
      links: {
        preview: 'https://adventjs.example.com'
      }
    }
  ];

}
