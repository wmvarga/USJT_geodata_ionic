import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhePaisPageModule } from '../pages/detalhe-pais/detalhe-pais.module';
import { ListaPaisesPageModule } from '../pages/lista-paises/lista-paises.module';
import { HttpModule } from  "@angular/http";
import { PaisProvider } from '../providers/pais/pais';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ListaPaisesPageModule,
    DetalhePaisPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisProvider
  ]
})
export class AppModule {}
