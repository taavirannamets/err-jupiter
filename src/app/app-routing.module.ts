import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './video/feature/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'video', pathMatch: 'full' },
  {
    path: 'video',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
