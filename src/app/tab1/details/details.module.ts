import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    IonicModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
