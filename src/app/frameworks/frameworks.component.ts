import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent implements OnInit {

  constructor() { }

  @Output() frameDescSelected = new EventEmitter<string>();

  onSelectFrame(frameSelected: string){
    this.frameDescSelected.emit(frameSelected);
  }
  ngOnInit(): void {
  }

}
