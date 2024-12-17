import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  empData:any[]=[];
  isClickRadio:boolean=false;
  id!:any;
  constructor(private service:HttpService,private router:Router){

  }
  ngOnInit(): void {
    this.getDataFromBackend();
  }
  getDataFromBackend(){
    this.service.getAllEmployee().subscribe((response:any)=>{
      console.log(response);
      this.empData=response;
    })
  }

  onEdit(id:any){
   this.isClickRadio=true;
   this.id=id;
  }

  onUpdate(){
    if (this.isClickRadio) {
    //update logic
      this.router.navigate(['/updateemp',this.id]);
    } else {
     alert("Please Select A Record to Update...");
    }
  }

  onDelete(){
    if (this.isClickRadio) {
      //update logic
      this.service.deleteEmployee(this.id).subscribe((response)=>{
        console.log(response);
        this.getDataFromBackend();
      })

      } else {
       alert("Please Select A Record to delete...");
      }
  }
}
