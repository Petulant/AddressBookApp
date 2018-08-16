import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var firebase;
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  inputName: any;
  inputPhone: any;
  inputEmail: any;

  name;
  saveadata;
  
  arrData= [{
    name:'',
    keyname:''}
  ];

Book={
  name:''
};
  constructor(public navCtrl: NavController, public navParams: NavParams) {


 firebase.database().ref('/Book/').on("value",(snapshot)=>{
  this.arrData=[]
  snapshot.forEach((snap)=>{
  console.log(snap.val() +"111111");

  this.arrData.push({name:snap.val().name,keyname:snap.key});

  });
  return false;
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }


   
  save(){
  
  this.navCtrl.push("HomePage");

  }
}
