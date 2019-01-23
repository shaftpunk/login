import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private aFauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{
      const result = this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
      
      this.navCtrl.setRoot('ProfilePage');
      }
    }catch(e){
    console.error(e)
  }
}

  signup(){
    this.navCtrl.push('SignupPage');
  }

}
