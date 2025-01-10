import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  knowMore?: string;
}

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  // Aquí está el cambio principal: experienceComponent -> experiences y el tipo correcto
  experiences: Experience[] = [
    {
      role: 'Content creator',
      company: 'Twitch',
      date: 'Present...',
      description: 'I share about programming and web development on various platforms. Awarded as the best non-English content creator in 2022 and best community in 2023 by GitHub.',
      knowMore: 'Know more >'
    },
    {
      role: 'Principal Frontend Engineer',
      company: 'Adevinta Spain',
      date: 'September 2022',
      description: 'Responsible for the platform, components, and utilities for the creation and development of web applications. Achieved a 30% improvement in software delivery. Implementation of continuous integration and deployment measures with A/B testing across more than 15 teams.'
    }
  ];
}
