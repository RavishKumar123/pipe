import { Routes } from '@angular/router';

import { PipelineComponent } from './pipeline/pipeline.component';
import { SettingComponent} from "./setting.component";
import { UsersComponent } from './users/users.component';

export const AppsRoutes: Routes = [{
  path: '',
  component: SettingComponent,
  children: [{
    path: '',
    component: SettingComponent
  },
  {
    path: 'pipeline',
    component: PipelineComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }]
}];
