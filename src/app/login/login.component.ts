import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });



  constructor(private router: Router) { }

  ngOnInit() {
  }


  submit() {

    this.router.navigate(['/home']);
    
  }

  

}
