import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  frame:boolean;

  constructor(){
    this.frame = true;
  }

  showFrame(){
    const ancho = 800;
    const altura = 600;
    const izquierda = (window.screen.width - ancho) / 2;
    const arriba = (window.screen.height - altura) / 2;
    window.open('https://hogardepaso-dc34e.web.app/', '_blank', `width=${ancho},height=${altura},left=${izquierda},top=${arriba}`);  }
 

}
