import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName:boolean=false;
  userAge:boolean=false;
  userEmail:boolean=false;
  userPass:boolean=false;

  showName(e:any){
        if(e.target.value.length > 0){
            this.userName =true
        }
        else{
          this.userName=false
        }
  }
  showAge(a:any){
        if(a.target.value.length > 0){
            this.userAge =true
        }
        else{
          this.userAge=false
        }
  }
  showEmail(u:any){
        if(u.target.value.length > 0){
            this.userEmail =true
        }
        else{
          this.userEmail=false
        }
  }
  showPass(p:any){
        if(p.target.value.length > 0){
            this.userPass =true
        }
        else{
          this.userPass=false
        }
  }
}
