import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-selling',
  templateUrl: './list-selling.component.html',
  styleUrls: ['./list-selling.component.css']
})
export class ListSellingComponent implements OnInit {
sellingcompany: any;
constructor(private http:HttpClient,private router:Router,private adminService: AdminService) { }


ngOnInit(): void {
  let response= this.http.get("http://localhost:18079/demoadmin-1.0-SNAPSHOT/api/admin/getsellcompanies");
  response.subscribe((data)=>this.sellingcompany=data);

}

goToHome():void{
  this.router.navigate(['/adminhome']);
}
}
