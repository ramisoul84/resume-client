import { Component } from '@angular/core';
import { Project } from '../../_models/project';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "../../components/project/project.component";

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ProjectComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
   projects:Project[]=[
    {title:"todo",link:"/todo",github:"df"},
    {title:"weather",link:"/weather",github:"df"},
    {title:"SOCIAL",link:"/social",github:"df"},
    {title:"TODO",link:"/todo",github:"df"},
    {title:"INFO",link:"/info",github:"df"},
  ]
}
