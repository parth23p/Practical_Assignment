import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  // template: `
  // <h2>{{parentData}}</h2>
  // `,
  styleUrls: ['./search-by.component.css']
})
export class SearchByComponent implements OnInit {
  public firstNameId = "firstNameId";
  public lastNameId = "lastNameId";
  public charNoId = "charNoId";
  public address1Id = "address1Id";
  public message: any;
  public searchString: any;
  public firstSplit: string[] = [];
  public secondSplit: string[] = [];
  public thirdSplit: string[] = [];
  public splitAfterSlash: string[] = [];
  public firstName: any;
  public lastName: any;
  public charNo: any;
  public address1: any;
  public setterString: any;

  @Input('parentData') public parentData: any;

  // @Output() public search_by_to_bar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // if (this.searchString.length != 0) {
    this.searchByValueSetter();
    // }
  }

  searchByValueSetter() {

    this.searchString = this.parentData;
    this.firstSplit = this.searchString?.split("#");
    this.secondSplit = this.firstSplit[0]?.split("@");
    this.thirdSplit = this.firstSplit[1]?.split("$");
    this.firstName = this.secondSplit[0];
    this.lastName = this.secondSplit[1];
    this.charNo = this.thirdSplit[0];
    this.address1 = this.thirdSplit[1];
  }

  // searchBarValueSetter(event: any) {
  //   this.setterString = "";
  //   if (this.firstName) {
  //     this.setterString = "'\'" + this.firstName;
  //   }
  //   else if (this.lastName) {
  //     this.setterString += "'@'" + this.lastName;
  //   }
  //   else if (this.charNo) {
  //     this.setterString += "'#'" + this.charNo;
  //   }
  //   else if (this.address1) {
  //     this.setterString += "'$'" + this.address1;
  //   }

  //   this.search_by_to_bar.emit(this.setterString);
  // }

}



