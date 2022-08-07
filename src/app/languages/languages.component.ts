import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { langDescription } from '../lang.description.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  constructor() { }
  @Output() langDescSelected = new EventEmitter<string>();

  onSelect(langDesc: string){
    this.langDescSelected.emit(langDesc);
  }
  ngOnInit(): void {
  }

}
