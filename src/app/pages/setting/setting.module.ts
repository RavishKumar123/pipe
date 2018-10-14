import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from "./setting.component";

import { PipelineComponent } from './pipeline/pipeline.component';
import { RouterModule} from "@angular/router";
import { AppsRoutes } from "./setting.routing";
import { DemoMaterialModule} from '../../demo-material-module';
import { DialogPipeline } from './pipeline/pipeline.component'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { DialogAddUser } from './users/users.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    DemoMaterialModule,
    FormsModule
  ],
  declarations: [
   SettingComponent,
    PipelineComponent,
    DialogPipeline,
    UsersComponent,
    DialogAddUser    
  ],
  entryComponents: [
    DialogPipeline,
    DialogAddUser
  ]
})
export class SettingModule { }
