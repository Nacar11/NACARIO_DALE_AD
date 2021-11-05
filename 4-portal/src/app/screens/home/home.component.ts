import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private api: HttpClient) {}
  
  users: Array<any> = [];

  // idGetter: FormGroup = new FormGroup({
  //   fcId: new FormControl('', Validators.required)
  // });

  // enable = false;
  // enable_1 = false;
  // enable_2 = false;
  // enable_3 = false;


  ngOnInit(): void {
    // this.getAll();
  }



  // async getAll(){
  //   var result: any = await this.api
  //   .get(environment.API_URL + '/user/all').toPromise();
  //   this.users = result.data;
  // }


  // getAll(){
  //   return this.api.get(environment.API_URL + '/user/all')
  //   .subscribe(data => {this.list = data});
  // }
  // toggleDisplay(){
  //   this.enable = !this.enable;
  // }
  // toggleDisplay1(){
  //   this.enable_1 = !this.enable_1;
  // }
  // toggleDisplay2(){
  //   this.enable_2 = !this.enable_2;
  // }
  // toggleDisplay3(){
  //   this.enable_3 = !this.enable_3;
  // }

  // nav(destination: string) {
  //   this.router.navigate([destination]);
  // }
}


