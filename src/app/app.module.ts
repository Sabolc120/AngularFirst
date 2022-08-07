import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LanguagesComponent } from './languages/languages.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { LangSeasharkComponent } from './languages-showcase/lang-seashark/lang-seashark.component';
import { LangJavaComponent } from './languages-showcase/lang-java/lang-java.component';
import { LangJavascriptComponent } from './languages-showcase/lang-javascript/lang-javascript.component';
import { FrameAngularComponent } from './frameworks-showcase/frame-angular/frame-angular.component';
import { FrameSpringBootComponent } from './frameworks-showcase/frame-spring-boot/frame-spring-boot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguagesComponent,
    FrameworksComponent,
    LangSeasharkComponent,
    LangJavaComponent,
    LangJavascriptComponent,
    FrameAngularComponent,
    FrameSpringBootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
