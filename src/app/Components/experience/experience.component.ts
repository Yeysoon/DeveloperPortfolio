import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  knowMore?: string;
  logo?: string;
  startDate?: string;
  location?: string;
}

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experienciaProfesional: Experience[] = [
    {
      role: 'Software QA Analyst',
      company: 'Arrenco Gasolineras Don Arturo · Jornada Completa, Hibrida',
      startDate: '2025-04-07',
      location: 'Mixco, Guatemala.',
      description: 'Especialista en la implementación de aplicaciones, sistemas y reportería interna en el área de Recursos Humanos, con el objetivo de automatizar y facilitar procesos, administración de bases de datos, documentación de aplicaciones, brinda soporte técnico e identifica oportunidades de mejora en los sistemas de información, garantizando la eficiencia y seguridad de los datos corporativos.',
      knowMore: 'Microsoft SQL Server · STA Web · Visual Basic · Análisis de Datos · SQL Reporting Services',
      logo: '/logos/LogoArturo.png',
      date: ''
    }
  ];

  experienciasAnteriores: Experience[] = [
    {
      role: 'STA Assistant - HR PROJECTS',
      company: 'MPRH · Jornada Completa, Presencial',
      date: 'Ene. 2025 - Abril 2025 · 9 meses | Palín, Escuintla.',
      description: 'Especialista en la implementación de aplicaciones, sistemas y reportería interna en el área de Recursos Humanos, con el objetivo de automatizar y facilitar procesos, administración de bases de datos, documentación de aplicaciones, brinda soporte técnico e identifica oportunidades de mejora en los sistemas de información, garantizando la eficiencia y seguridad de los datos corporativos.',
      knowMore: 'Microsoft SQL Server · STA Web · Visual Basic · Análisis de Datos · SQL Reporting Services',
      logo: '/logos/MprhWhite.png'
    },
    {
      role: 'Production Assistant',
      company: 'Kerry · Jornada Completa, Presencial',
      date: 'Sept. 2022 - Jul. 2024 · 1 año 11 meses | Amatitlán, Guatemala.',
      description: 'Responsable del análisis de órdenes de producción, validando costos dentro de ERP SAP, cantidades proyectadas, carga y retornos de productos utilizados en recetas incluyendo cierre TECO a las mismas, confirmaciones y desconfirmaciones de fases de tiempo de procesos, resolución de casos específicos en el proceso, inventario general del depto, seguimiento a la programación semanal de la producción entre otros.',
      knowMore: 'ERP SAP · Suite Office · Resolución de Problemas · Análisis de datos · Trabajo en equipo',
      logo: '/logos/KerryWhite.png'
    },
    {
      role: 'Cost Entry Assistant, Accounting Assistant',
      company: 'Grupo Alza · Jornada Completa, Presencial ',
      date: 'Nov. 2019 - Ago. 2022 · 2 años 10 meses | Amatitlán, Guatemala.',
      description: 'Responsable de realizar el análisis validación de costos de operaciones de carga, retorno y cierre de OP así como control general de las órdenes, transformaciones de estas para realizar despachos hacia las diferentes bodegas, ingreso financiero de importaciones por (DUCA) y el costo de la materia prima.',
      knowMore: 'INFOR LABEL · Suite Office · Habilidades Comunicativas · Empatía · Flexibilidad y Adaptabilidad',
      logo: '/logos/GrupoAlzaWhite.png'
    }
  ];
calcularTiempoTranscurrido(inicio: string | undefined): string {
  if (!inicio) return '';

  const fechaInicio = new Date(inicio);
  if (isNaN(fechaInicio.getTime())) return 'Fecha inválida';

  const hoy = new Date();

  let anios = hoy.getFullYear() - fechaInicio.getFullYear();
  let meses = hoy.getMonth() - fechaInicio.getMonth();
  let dias = hoy.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anios--;
    meses += 12;
  }

  const partes: string[] = [];

  if (anios > 0) {
    partes.push(`${anios} Año${anios > 1 ? 's' : ''}`);
    if (meses > 0) partes.push(`${meses} Mes${meses > 1 ? 'es' : ''}`);
    // No incluimos días si ya pasó al menos 1 año
  } else {
    if (meses > 0) partes.push(`${meses} Mes${meses > 1 ? 'es' : ''}`);
    if (dias > 0) partes.push(`${dias} Día${dias > 1 ? 's' : ''}`);
  }

  const mesesNombres = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const mesInicio = mesesNombres[fechaInicio.getMonth()];
  const anioInicio = fechaInicio.getFullYear();

  return `${mesInicio} ${anioInicio} – Presente · ${partes.join(' y ')}`;
}


}
