import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[0-9]+$')])
  })

  //to be changed!!!!!!!!
  updateProfile(){
    console.log(this.profileForm.value);
  }

  get user ()
  {
    return this.profileForm.get('user');
  }

  get email ()
  {
    return this.profileForm.get('email');
  }

  get age ()
  {
    return this.profileForm.get('age');
  }
}
