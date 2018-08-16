import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var firebase;
@IonicPage()
@Component({

  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  inputName;
  inputPhone;
  inputEmail: any;


  arrData= [{
    name:'',
    keyname:''}
  ];

Book={
  name:'',
  phone:0,
  email:''
};

person : FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private Fb: FormBuilder) {

    firebase.database().ref('/Book/').on("value",(snapshot)=>{
      this. arrData=[]
      snapshot.forEach((snap)=>{
      console.log(snap.key);
  
      this. arrData.push({name:snap.val(),keyname:snap.key});
    
      
      });
      return false;
    });

    this.person = Fb.group({
      name: ['',Validators.required],
      phone : [,[Validators.required]],
      Email: ['',[Validators.required]]
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  ListPage(){
    this.navCtrl.push('AddPage',{variable:this.inputName,name:this.inputPhone,email:this.inputEmail});
    this.arrData=[];
    console.log(this.inputName);
    console.log(this.inputPhone);
    console.log(this.inputEmail);

    // passing my data on the database
    this.Book.name=this.inputName;
    this.Book.phone=this.inputPhone;
    this.Book.email=this.inputEmail;

    var database=firebase.database();
    database.ref('/Book/').push(this.Book);

// to reset these variables when i go back to homePage
    this.inputName='';
    this.inputPhone='';
    this.inputEmail='';
    
  }
  onSubmitPerson({value, valid}:{value:any,valid}){
    console.log(value);
}

}
