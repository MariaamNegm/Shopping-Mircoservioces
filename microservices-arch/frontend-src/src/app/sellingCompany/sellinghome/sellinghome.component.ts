import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellinghome',
  templateUrl: './sellinghome.component.html',
  styleUrls: ['./sellinghome.component.css']
})
export class SellinghomeComponent implements OnInit {

  constructor(private router:Router) {  }

  ngOnInit(): void {
  }
  goTologout(){
    this.router.navigate(['/selllogout']);
  }

}
