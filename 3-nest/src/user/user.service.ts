import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Car } from 'src/user/carModel';
import { user } from 'src/user/userClass';

@Injectable()
export class UserService {
    private users: Map<string,user> = new Map<string,user>();


    sampleFunction(){
        var car1:Car
    
        car1 = new Car("letsgo", "blue", {name: "kachaw", radius: 10});
       
        
        return car1.toJson();
    }

    getAll(id:string){
       
        return this.users.get(id).toJson1("all");       
    }

    register(newuser:any){
        var newUser: user;
        newUser = new user(newuser?.username, newuser?.password, newuser?.age, newuser?.email, newuser?.name);
        
        this.users.set(newuser.id, newUser);
        this.logAllUsers();
        return newUser.toJson1("Account created");
    }


    logAllUsers(){
        for(const [key,user] of this.users.entries()){
          console.log(key);
            user.displayAccountInfo();
        }

}


    changeUserDetails(id:string, newuser: any){
        var newUser: user;
       
        newUser = new user(newuser?.username, newuser?.password, newuser?.age, newuser?.email, newuser?.name);
        
        
        if (newuser.password == undefined)
        return newUser.toJson1("Password not defined");
    
         else if(newuser.username == undefined)
         return newUser.toJson1("Username not defined");

        else if(newuser.age == undefined)
        return newUser.toJson1("Age not defined");
    
        else if(newuser.email == undefined)
        return newUser.toJson1("Email not defined");

        else if(newuser.name == undefined)
        return newUser.toJson1("Name not defined");


        this.users.set(id, newUser);
        this.logAllUsers();
        return newUser.toJson1("Change Succesful");
    }

    

    deleteUser(id:string){

        if(this.users.has(id))
        this.users.delete(id);
        else console.log("The id "+id+" does not exist in database!");
      }




      getUserid(id:string){
          if(this.users.has(id))
            return this.users.get(id).toJson();
      }

      patchUser(id:string, newuser:any){
        for(const [num,user] of this.users.entries()){
            if(user['id'] === id){
                // if(newuser.usename != undefined)
                    user["username"] = newuser.username;
                console.log("asdas");



                    
            }

        }
        this.logAllUsers();
        return this.users.get(id).toJson1("Change Successful");
        
      }
      

      login(newuser:any){
          
          for(const [number,user] of this.users.entries()){
                
             
          }

      }


      getUserSearch(newuser:any){
        for(const [num,user] of this.users.entries()){
            
        }
      }
}
