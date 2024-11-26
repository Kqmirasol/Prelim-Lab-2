import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { TrainingComponent } from './training/training.component';
import { ReferenceComponent } from './reference/reference.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalComponent, EducationComponent, ExperienceComponent,TrainingComponent, ReferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prelim_Lab_2';
}
