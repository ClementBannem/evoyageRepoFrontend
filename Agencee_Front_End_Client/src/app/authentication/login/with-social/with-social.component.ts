import { User } from '../../../model/model.user';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html'
})
export class WithSocialComponent implements OnInit {
  user: User= new User();
  errorMessage: string;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.logIn(this.user)
      .subscribe(data =>  {        
        this.router.navigate(['/dashboard']);
        }, err =>  {
        this.errorMessage = "Nom d'utilisateur ou mot de passe incorrecte";
        }
      )
  }

}
