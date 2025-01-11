import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  knowMore?: string;
  logo?: string;
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
      description: 'Especialista en la implementación de aplicaciones, sistemas y reporteria interna en el área de Recursos Humanos, con el objetivo de automatizar y facilitar procesos, administración de bases de datos, documenta aplicaciones y sistemas, brinda soporte tecnico e identifica oportunidades de mejora los sistemas de información, garantizando la eficiencia y seguridad de los datos corporativos.',
      knowMore: 'Microsoft SQL Server · STA Web · Visual Basic · Analisis de Datos · SQL Reporting Services',
      logo: '/logos/MprhWhite.png'
    },
    {
      role: 'HR Metrics Assistant IT RRHH',
      company: 'MPRH · Jornada Completa',
      date: 'Jul. 2024 - Dic. 2024 · 6 meses | Guatemala',
      description: 'Soporte en la implementación de aplicaciones, sistemas y reportería interna a Talento Humano, proporcionando asistencia técnica a todo el personal del departamento, contribuyendo a la automatización y eficiencia de los procesos, administración de bases de datos, y mejora continua de los sistemas de información.',
      knowMore: 'Microsoft SQL Server · STA Web · Visual Basic(VBA) · Analisis de Datos · Soporte en sitio',
      logo: '/logos/MprhWhite.png'
    },
  ];


  experiences2: Experience[] = [
    {
      role: 'Production Assistant',
      company: 'Kerry · Jornada Completa',
      date: 'Sept. 2022 - Jul. 2024 · 1 año 11 meses | Guatemala',
      description: 'Responsable del análisis de ordenes de producción, validando costos dentro de ERP SAP, cantidades proyectadas, carga y retornos de productos utilizados en recetas incluyendo cierre TECO a las mismas, confirmaciones y des confirmaciones de fases de tiempo de procesos, resolución de casos específicos en el proceso, inventario general del depto, seguimiento a la programación semanal de la producción entre otros.',
      knowMore: 'ERP SAP · Suite Office · Resolución de Problemas · Análisis de datos · Trabajo en equipo',
      logo: '/logos/KerryWhite.png'
    }
  ];

  experiences3: Experience[] = [
    {
      role: 'Cost Entry Assistant, Accounting Assistant',
      company: 'Grupo Alza · Jornada completa | Guatemala',
      date: 'Nov. 2019 - Ago. 2022 · 2 años 10 meses',
      description: 'Responsable de realizar el análisis validación de costos de operaciones de carga, retorno y cierre de OP así como control general de las ordenes, transformaciones de estas para realizar despachos hacia las diferentes bodegas, ingreso financiero de importaciones por (DUCA) y el costo de la materia prima.',
      knowMore: 'INFOR LABEL · Suite Office · Habilidades Comunicativas · Empatía· Flexibilidad y Adaptabilidad',
      logo: '/logos/GrupoAlzaWhite.png'
    }
  ];
}
