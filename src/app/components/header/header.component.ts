import { Component, OnInit } from '@angular/core';
import { TransformerActions } from '../transformers/transformer.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  brand: string; 

  constructor(private transformerActions: TransformerActions) { }

  ngOnInit() {
    this.brand = 'Transformers Management';
  }

  filterItems(searchText: string){
    this.transformerActions.filterTransformers(searchText);
  }

}
