import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  inputName: any;
  inputPhone: any;
  inputEmail: any;

  name;
  
  arrData= [{
    name:'',
    keyname:''}
  ];

Book={
  name:''
};
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("variable"));
    this.inputName=navParams.get("variable");
    this.inputPhone=navParams.get("name");
    this.inputEmail=navParams.get("email");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
List(){
this.navCtrl.push('ListPage',{variable:this.inputName});
this.arrData=[];
console.log(this.inputName);
}

}
