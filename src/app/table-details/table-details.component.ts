import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog ,MatDialogConfig } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import {MessageService} from '../services/message.service';
import {Message} from '../models/message';


export interface message {
  message: string;
  sequence: number;
  branch: string;
  status: boolean;
  day:string;
  hour:Date;
}

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})

export class TableDetailsComponent implements OnInit {

  // hour= new FormControl();
  today: number = Date.now();
  huor:Date=new Date();
  messages:Message[]=null;
  sequence=10;
  displayedColumns: string[] = ['edit','hour','day','sequence', 'message', 'branch', 'status'];
  dataSource = new MatTableDataSource<Message>(this.messages);
  
  
  

    constructor(private dialog :MatDialog,
    private messageService:MessageService) {
    }
    
    
 
 
  ngOnInit(): void {
    this.GetMessages();
    // this.messages.paginator = this.paginator;
  }


  create(): void{
    this.dialog.open(PopUpComponent)
  }

  edit(row){
  }

  GetMessages(){
    this.messageService.getAllMessages().subscribe(res=>{this.messages=res, console.log(this.messages)});
   
  }

}
