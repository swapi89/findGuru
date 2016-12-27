import { Component } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: 'app/views/edit.tpl'
})

export class EditComponent {
   private username;
   private router;

  constructor(private route : ActivatedRoute){

    this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  // private ngOnInit() {
  // this.router = this.route.params.subscribe(params => {
  //   this.username = params['username'];
  // });
//}

// private ngOnDestroy() {
//   this.router.unsubscribe();
// }
}
