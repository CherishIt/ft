import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BaiduMapModule } from 'angular2-baidu-map';

// import { MatListModule } from '@angular/material/list';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { MallPageComponent } from './pages/mall-page/mall-page.component';
import { LevelPageComponent } from './pages/level-page/level-page.component';

import { LevelCardComponent } from './components/level-card/level-card.component';
import { ToiletCardComponent } from './components/toilet-card/toilet-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToiletModalComponent } from './components/toilet-modal/toilet-modal.component';
import { MapModalComponent } from './components/map-modal/map-modal.component';

import { MallService } from './services/mall.service';
import { LevelService } from './services/level.service';
import { ModalService } from './services/modal.service';

const appRoutes: Routes = [
  {
    path: 'malls/:mall_id',
    component: MallPageComponent,
  },
  {
    path: 'malls/:mall_id/levels/:level_id',
    component: LevelPageComponent,
  },
  {
    path: 'malls/:mall_id/levels/:level_id/toilets/:toilet_id/map',
    component: MapModalComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MallPageComponent,
    LevelPageComponent,
    LevelCardComponent,
    ToiletCardComponent,
    ModalComponent,
    ToiletModalComponent,
    MapModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    HttpClientModule,
    BaiduMapModule.forRoot({ak: 'KG5QWyNXednF6ylkZWNFqE9Y'}),
    // MatListModule,
    // MatCardModule,
    // MatButtonModule,
  ],
  providers: [
    MallService,
    LevelService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
