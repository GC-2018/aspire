import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { MediaComponent } from './media/media.component';
import { BeliefsComponent } from './beliefs/beliefs.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent},
    { path: 'about', component: AboutComponent },
    { path: 'location', component: MapComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ministries', component: MinistriesComponent },
    { path: 'media', component: MediaComponent },
    { path: 'whatwebelieve', component: BeliefsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
