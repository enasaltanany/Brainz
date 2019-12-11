import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators'; 
import { LoginService } from './Login.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    // private alertService: AlertService
    ) { 
      this.loginForm = this.formBuilder.group({
        'username': ['', Validators.required],
        'password': ['', Validators.required]
      });
    }

  ngOnInit() {

  }
    submitForm($ev, value: any){
      console.log("submitFrom")
      this.router.navigateByUrl('/leaderboard');

    }

}
