import { Time } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog ,MatDialogConfig } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';



@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})

export class TableDetailsComponent implements AfterViewInit {

  // hour= new FormControl();

  
  huor:Date=new Date();

  displayedColumns: string[] = ['edit','hour','day','sequence', 'message', 'branch', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  formGroup: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(formBuilder: FormBuilder, 
    private dialog :MatDialog) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }
  // hours:Date[]=[];
  // fiilHours(){
  //   for (let h = 0; h < 24; h++) {
  //     const hh = h > 9 ? "" + h: "0" + h;
  //     for(let m = 0; m < 60; m += 15) {
  //       const mm = m > 9 ? "" + m: "0" + m;
  //       this.hours.push(`${hh}:${mm}`);
  //     }
  //   }
  // }
  ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator;
  }
 
  ngOnInit(): void {
  }


  create(): void{
    this.dialog.open(PopUpComponent)
  }

  edit(row){}
}
 
export interface PeriodicElement {
  message: string;
  sequence: number;
  branch: string;
  status: boolean;
  day:string;
  hour:Date;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {sequence: 1, message: 'Hydrogen', branch: '0079', status: true,day:'hh',hour:new Date()},
  {sequence: 2, message: 'Helium', branch: '0026', status: true, day:'חיעימעיכ',hour:new Date()},
  {sequence: 3, message: 'Lithium', branch: '6', status: false, day: '',hour:new Date()},
  {sequence: 4, message: 'Beryllium', branch: '9.0122', status: false, day:'Sunday',hour:new Date()},
];

 // Get the current date and time as a date-time value.
 export class DatePipeComponent {
   today: number = Date.now();
 };
