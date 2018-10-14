import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AppsRoutes } from './apps.routing';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarDialogComponent } from './fullcalendar/fullcalendar.component';
import { DialogDataExampleDialog } from './mail/mail.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { PipedriveService } from "../Services/pipedrive.service";
import { AddDrealComponent } from './add-dreal/add-dreal.component';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { OrganizationsComponent } from './organizations/organizations.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    DemoMaterialModule,
    CalendarModule.forRoot(),
    FlexLayoutModule,
    QuillModule,
    DragulaModule,  
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FullcalendarComponent,
    MailComponent,
    DialogDataExampleDialog,
    ChatComponent,
    CalendarDialogComponent,
    TaskboardComponent,
    AddDrealComponent,
    OrganizationsComponent,
    AddOrganizationComponent  
  ],
  providers: [PipedriveService],
  entryComponents: [ CalendarDialogComponent, DialogDataExampleDialog,AddDrealComponent,AddOrganizationComponent],
     
})

export class AppsModule {}
