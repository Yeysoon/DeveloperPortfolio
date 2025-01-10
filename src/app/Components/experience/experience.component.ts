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

  experiences: Experience[] = [
    {

      role: 'STA Assistant - HR PROJECTS',
      company: 'MPRH · Jornada Completa',
      date: 'Ene. 2025 - Presente | Guatemala',
      description: 'I share about programming and web development on various platforms. Awarded as the best non-English content creator in 2022 and best community in 2023 by GitHub.',
      knowMore: 'Know more >'
    },
    {
      role: 'HR Metrics Assistant IT RRHH',
      company: 'MPRH · Jornada Completa',
      date: 'Jul. 2024 - Dic. 2024 · 6 meses | Guatemala',
      description: 'Responsible for the platform, components, and utilities for the creation and development of web applications. Achieved a 30% improvement in software delivery. Implementation of continuous integration and deployment measures with A/B testing across more than 15 teams.',
      knowMore: 'Know more >'
    },
  ];


  experiences2: Experience[] = [
    {
      role: 'Production Assistant',
      company: 'Kerry · Jornada Completa',
      date: 'Sept. 2022 - Jul. 2024 · 1 año 11 meses | Guatemala',
      description: 'Responsable del análisis de ordenes de producción, validando costos dentro de ERP SAP, cantidades proyectadas, carga y retornos de productos utilizados en recetas incluyendo cierre TECO a las mismas, confirmaciones y des confirmaciones de fases de tiempo de procesos, resolución de casos específicos en el proceso, inventario general del depto, seguimiento a la programación semanal de la producción entre otros.',
      knowMore: 'Know more >'
    }
  ];

  experiences3: Experience[] = [
    {
      role: 'Cost Entry Assistant, Accounting Assistant',
      company: 'Grupo Alza · Jornada completa | Guatemala',
      date: 'Nov. 2019 - Ago. 2022 · 2 años 10 meses',
      description: 'Responsable de realizar el análisis validación de costos de operaciones de carga, retorno y cierre de OP así como control general de las ordenes, transformaciones de estas para realizar despachos hacia las diferentes bodegas, ingreso financiero de importaciones por (DUCA) y el costo de la materia prima.',
      knowMore: 'Know more >'
    }
  ];
}
