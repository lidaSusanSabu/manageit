import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ProjectService: ProjectService, private route: ActivatedRoute) {
    const employeeId = this.route.snapshot.params.empid;
    console.log(employeeId);
    this.ProjectService.getProjects(employeeId).subscribe((res: Project[]) => {
      this.projects = res;
      console.log(this.projects);
    });
   }

  ngOnInit() {
  }
  // refreshPage() {
  //   this.ProjectService.getProjects(employeeId).subscribe((res: Project[]) => {
  //     this.projects = res;
  //     console.log(this.projects);
  //   });
  // }

}
