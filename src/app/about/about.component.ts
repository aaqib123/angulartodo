import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  gText: String;
  private router:Router;
  constructor() { }

  ngOnInit() {
    this.router.navigate(['']);
  }

}
