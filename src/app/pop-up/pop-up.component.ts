import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface sequence {
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  day = new FormControl();
  formGroup: FormGroup;
  pageSize = 10;


  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  sequences: sequence[] = [
    {value: 'week-0', viewValue: 'שבועי'},
    {value: 'throwaway-1', viewValue: 'חד פעמי'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    
  }
  
}
