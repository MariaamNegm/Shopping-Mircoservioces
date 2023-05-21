import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  goToHome():void{
    this.router.navigate(['/sellinghome']);
  }

}
