import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { OrganizationsComponent } from "./organizations/organizations.component";
export const AppsRoutes: Routes = [{
  path: '',
  children: [{
    path: 'calendar',
    component: FullcalendarComponent
  }, {
    path: 'messages',
    component: MailComponent
  }, {
    path: 'chat',
    component: ChatComponent
  }, {
    path: 'taskboard',
    component: TaskboardComponent
  },
{
    path: 'organizations',
    component: OrganizationsComponent
  }]
}];
