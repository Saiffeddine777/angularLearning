import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
    clients : any [] = []
    toggle : boolean= false  
    updateToggle:boolean = false
    newEmail = new FormControl()

    ngOnInit():void{
      axios.get("http://127.0.0.1:5000/api/client/getallclients")
      .then(res=>{
        this.clients = res.data
        console.log(this.clients,"this.clients")
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
    handleToggle(){
      this.toggle= !this.toggle
    }
    handleUpdateToggle(){
      this.updateToggle=!this.updateToggle
    }

    handleUpdate(id:any,email:string):void{
      axios.put(`http://127.0.0.1:5000/api/client/updateclient/${id}`,{
          email:email
      })
      .then(res=>{
         console.log("success",res)
      })
      .catch(err=>{
        console.log(err)
      })
    }

    handleDelete(id:any):void{
      axios.delete(`http://127.0.0.1:5000/api/client/deleteclient/${id}`)
      .then(res=>{
        console.log("success deleting",res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
}
