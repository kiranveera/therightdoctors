import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
users:any[]=[]
b:boolean=false
objecttomodify:object
  ngOnInit() {
    
   this.http.get('/routes/viewusers').subscribe((res)=>{
     this.users=res['message']
   })
}
adduser(x){
 
    if (x.Username == "" || x.address == "" || x.phnumber == "" || x.gmail == "") {
      alert("enter valid details")
    }
    else {
  this.http.post('/routes/adduser',x).subscribe((res)=>{
    alert(res['message'])
    this.http.get('/routes/viewusers').subscribe((res)=>{
      this.users=res['message']
    })
  })}

}
edit(y) {
  this.b = true;
  this.objecttomodify = y;
  console.log(this.objecttomodify);
  
}
onedit(z){
    this.b = false
    this.http.put('/routes/edituser', z).subscribe((res) => {
      alert(res['message'])
    })
  }
  delete(Username){
    this.http.delete(`/routes/delete/${Username}`).subscribe((res)=>{
      alert(res['message'])
      this.users=(res['data'])
    })
  }
}
