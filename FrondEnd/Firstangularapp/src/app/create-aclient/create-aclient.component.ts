import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-create-aclient',
  templateUrl: './create-aclient.component.html',
  styleUrls: ['./create-aclient.component.css']
})
export class CreateAClientComponent {
     lastName = new FormControl()
     firstName= new FormControl()
     email = new FormControl()
     phoneNumber =new FormControl()
     
     handleCreateClient(){
      axios.post("http://127.0.0.1:5000/api/client/createclient",{
        firstName:this.firstName.value,
        lastName:this.lastName.value,
        email:this.email.value,
        phoneNumber :this.phoneNumber.value
      })
      .then((res)=>{
         console.log("clientAdded",res)
      })
      .catch(err=>{
        console.log(err)
      })
     }
}
