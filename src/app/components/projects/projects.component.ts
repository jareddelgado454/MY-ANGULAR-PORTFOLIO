import { Component } from '@angular/core';
import { PandaWebComponent } from "../projectComponents/panda-web/panda-web.component";

@Component({
  selector: 'app-projects',
  imports: [PandaWebComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
