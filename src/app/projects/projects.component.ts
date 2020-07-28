import { Component, OnInit } from '@angular/core';
import { Project } from "../shared/project";
import { ProjectService } from "../services/project.service";

import { transition, animate } from "@angular/animations";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    /* transition('open => closed', [
      animate('1s')
    ]), */
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }

}
