import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
