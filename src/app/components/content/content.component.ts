import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { EducationComponent } from "../education/education.component";
import { ArticlesComponent } from "../articles/articles.component";
import { SuscribeComponent } from "../suscribe/suscribe.component";
import { StatsComponent } from "../stats/stats.component";

@Component({
  selector: 'app-content',
  imports: [ProfileComponent, ExperienceComponent, ProjectsComponent, TestimonialsComponent, EducationComponent, ArticlesComponent, SuscribeComponent, StatsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
