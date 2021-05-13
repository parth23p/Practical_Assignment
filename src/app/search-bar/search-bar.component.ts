import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  // template: `
  // <h2>{{setterData}}</h2>
  // `,
  styleUrls: ['./search-bar.component.css']
  // styles: []
  // [disabled] and bind-disabled are same
})
export class SearchBarComponent implements OnInit {

  public searchBarId = "searchBarId";
  public searchBarValue: any;

  @Input('setterData') public setterData: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("setterdata:", this.setterData);
  }
  ngOnChanges(): void {
    this.searchBarValueSetter();
    console.log("setterdata:", this.setterData);
  }

  searchBarValueSetter() {
    // if (this.setterData !== "" && this.searchBarValue === "") {
    this.searchBarValue = this.setterData;
    // }
  }

  fireEvent(event: any) {
    this.searchBarValue = event.target.value;
    this.childEvent.emit(this.searchBarValue);
  }
  clearSearchBar(event: any) {
    this.searchBarValue = "";
    this.childEvent.emit("");
  }
}
