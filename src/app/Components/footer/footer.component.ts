import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  {
  public currentYear: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
