import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgxAmapModule } from 'ngx-amap';

import { AppComponent } from './app.component';

import { MallPageComponent } from './pages/mall-page/mall-page.component';
import { LevelPageComponent } from './pages/level-page/level-page.component';

import { LevelCardComponent } from './components/level-card/level-card.component';
import { ToiletCardComponent } from './components/toilet-card/toilet-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToiletModalComponent } from './components/toilet-modal/toilet-modal.component';
import { MapModalComponent } from './components/map-modal/map-modal.component';
import { BannerComponent } from './components/banner/banner.component';

import { MallService } from './services/mall.service';
import { LevelService } from './services/level.service';
import { ModalService } from './services/modal.service';
import { ImageService } from './services/image.service';

const appRoutes: Routes = [
  {
    path: 'malls/:mallId',
    component: MallPageComponent,
  },
  {
    path: 'malls/:mallId/levels/:levelId',
    component: LevelPageComponent,
  },
  {
    path: 'malls/:mallId/levels/:levelId/toilets/:toiletId/map',
    component: MapModalComponent,
  },
  {
    path: '**',
    redirectTo: 'malls/5a20f52a3d950a7a8732d024',
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
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    HttpClientModule,
    NgxAmapModule.forRoot({
      apiKey: '645ebdcf0fd3e9e24a76b0df0b511530',
      urlPath: 'https://webapi.amap.com/maps',
    })
  ],
  providers: [
    MallService,
    LevelService,
    ModalService,
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
