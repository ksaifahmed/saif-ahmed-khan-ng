import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "education",
        component: EducationComponent
    },
    {
        path: "experience",
        component: ExperienceComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "skills",
        component: SkillsComponent
    }
];
