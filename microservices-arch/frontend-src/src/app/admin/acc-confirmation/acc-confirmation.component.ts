import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-confirmation',
  templateUrl: './acc-confirmation.component.html',
  styleUrls: ['./acc-confirmation.component.css']
})
export class AccConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToHome():void{
    this.router.navigate(['/adminhome']);
  }


}
