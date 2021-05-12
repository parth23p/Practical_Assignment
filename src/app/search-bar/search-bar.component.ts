import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
  // styles: []
  // [disabled] and bind-disabled are same
})
export class SearchBarComponent implements OnInit {

  public searchBarId = "searchBarId";
  public searchBarValue: any;
  public firstSplit: string[] = [];
  public secondSplit: string[] = [];
  public thirdSplit: string[] = [];
  public splitAfterSlash: string[] = [];
  public firstName: any;
  public lastName: any;
  public charNo: any;
  public address1: any;
  // @Input('setterData') public setterData: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // ngOnChanges(): void {
  //   this.searchBarValue = this.setterData;
  // }
  fireEvent(event: any) {
    this.searchBarValue = event.target.value;
    this.childEvent.emit(this.searchBarValue);
  }

}
