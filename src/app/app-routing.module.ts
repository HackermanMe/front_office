import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CarDetailComponent } from './detail/car-detail/car-detail.component';
import { HouseDetailComponent } from './detail/house-detail/house-detail.component';
import { LandDetailComponent } from './detail/land-detail/land-detail.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'houses/:trackingId', component: HouseDetailComponent},
  {path: 'lands/:trackingId', component: LandDetailComponent},
  {path: 'cars/:trackingId', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
