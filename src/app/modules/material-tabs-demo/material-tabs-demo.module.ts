import { NgModule } from '@angular/core';
import { MaterialTabsDemoRoutingModule } from './material-tabs-demo-routing.module';
import { MaterialTabsDemoComponent } from './material-tabs-demo.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    MaterialTabsDemoComponent,
  ],
  imports: [
    MatTabsModule,
    MaterialTabsDemoRoutingModule,
  ]
})
export class MaterialTabsDemoModule {}
