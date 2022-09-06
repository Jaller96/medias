
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.page.html',
  styleUrls: ['./selector.page.scss'],
})
export class SelectorPage implements OnInit {
  data: any;

  constructor(private router: Router, private activeroute: ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    })
  }

  
alumno(){
    let navigationExtras: NavigationExtras = {
      state: {
        alumno: this.data
      }
    };
    this.router.navigate(['/alumno'], navigationExtras);
  }
conductor(){
    let navigationExtras: NavigationExtras = {
      state: {
        chofer: this.data
      }
    };
    this.router.navigate(['/conductor'], navigationExtras);
  }
  ngOnInit() {
  }

}