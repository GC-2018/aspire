import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './users/auth.guard';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { MediaComponent } from './media/media.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { VideosComponent } from './videos/videos.component';
import { VoicerecordingsComponent } from './voicerecordings/voicerecordings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ministries', component: MinistriesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'beliefs', component: BeliefsComponent },
  { path: 'videos',
    component: VideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voicerecordings',
    component: VoicerecordingsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: './users/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
