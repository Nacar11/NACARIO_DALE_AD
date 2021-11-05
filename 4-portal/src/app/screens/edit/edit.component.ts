import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/shared/auth.service';
import { ApiService } from  'src/app/shared/api.service';


@Component({
  selector: 'edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) {}

  @Input() user:User|undefined;
  @Output() backEvent = new EventEmitter<boolean>();

  editForm: FormGroup = new FormGroup({
    fcName: new FormControl('', Validators.required),
    fcAge: new FormControl(0, Validators.min(1)),
    fcEmail: new FormControl('', Validators.required),
  });

  error: string = '';
  userID: string ='';

  goBack(){
    this.backEvent.emit(true);
  }

  ngOnInit(): void {
    if(this.user!=undefined){
      this.userID = `${this.user.id}`;
      this.editForm.setValue({
        fcName:this.user.name,
        fcAge: this.user.age,
        fcEmail:this.user.email
      });
    }
  }

  async onSubmit(userInfo: string) {
    this.patchUser(userInfo);
  }

  async patchUser(userInfo: string){
    var option:boolean = confirm("Confirm Edit of User " + `${this.user?.name}` + "?");

    if (option==true){
      var result = await this.api.patch(`/user/${userInfo}`,
      {
        name: this.editForm.value["fcName"] || undefined, 
        email: this.editForm.value["fcEmail"] || undefined, 
        age: this.editForm.value["fcAge"] || undefined
      });
       alert("Successfully Changed!");
      }
      if(result.success){
        console.log(result.data);
        this.goBack();
      }

  
  
  }

  nav(destination: string) {
    this.router.navigate([destination]);
  }


  
}