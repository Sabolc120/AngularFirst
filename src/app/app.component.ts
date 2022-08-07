import { Component } from '@angular/core';
import { langDescription } from './lang.description.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'langShowcase';
  loadedFeature= 'languages';
  seaSharpDesc= '';
  javaDesc = '';
  javaScriptDesc = '';
  springBootDesc = '';
  angularDesc = '';

  onDescSelected(langDesc: string){
    this.seaSharpDesc = langDesc;
    this.javaDesc = langDesc;
    this.javaScriptDesc = langDesc;
  }
  onDescFrameSelected(frameDesc: string){
    this.angularDesc = frameDesc;
    this.springBootDesc = frameDesc;
  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
