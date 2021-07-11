import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ExploreContainerComponent} from './explore-container.component';
import {HomeComponent} from '../components/home/home.component';
import {SearchComponent} from '../components/search/search.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {SavedComponent} from '../components/saved/saved.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    ExploreContainerComponent,
    HomeComponent,
    ProfileComponent,
    SavedComponent,
    SearchComponent,
  ],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {
}
