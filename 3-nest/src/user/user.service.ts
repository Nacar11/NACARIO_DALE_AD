import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Car } from 'src/user/carModel';
import { user } from 'src/user/userClass';

@Injectable()
export class UserService {
    private users: Map<number,user> = new Map<number,user>();

    constructor(){
        this.generateDefaultUsers();
    }
    sampleFunction(){
        var car1:Car
    
        car1 = new Car("letsgo", "blue", {name: "kachaw", radius: 10});
       
        
        return car1.toJson();
    }
    generateDefaultUsers(){
        this.users.set(1,new user(1,"Nacar",18,"nbrandale@yahoo.com","123456"));
        this.users.set(2,new user(2,"Bran",19,"nacariodale@gmail.com","asdasd"));
        this.users.set(3,new user(3,"Dale",19,"bran.nacario@usjr.edu.ph","234234s"));
        this.users.set(4,new user(4,"Ludo",20,"blankkuhaku@ngnl.com","blinddevotion"));
    }

    getAll(){
       
        var list =[];
        for(const user of this.users.values()){
            list.push(user.toJson());
        }
        return list;
    }


    register(newuser:any){
        var newUser: user;
        newUser = new user(newuser?.id, newuser?.name, newuser?.age, newuser?.email, newuser?.password);
        
        this.users.set(newuser.id, newUser);
        return "Account Created";
    }


//     logAllUsers(){
//         for(const [key,user] of this.users.entries()){
//           console.log(key);
//             user.displayAccountInfo();
//         }

// }


    changeUserDetails(id:string, newuser: any){
        var newUser: user, tempuser: user;
        var parsedID = parseInt(id);

        
       if(this.users.has(parsedID)){
       
         newUser = new user(parsedID, newuser?.name, newuser?.age, newuser?.email, newuser?.password);
         tempuser = this.users.get(parsedID);
         if(newUser.compare(tempuser)){
             this.users.set(parsedID, newUser)
             return `Successfully changed User Details on ID Number ${parsedID}`;
         }
         else {
             return "Error! Must input all necessary Details."
         }
       }
      else {
          return "Error! ID Number not found.";
      }
      }
    


    

    

    deleteUser(id:string){
        var parsedID = parseInt(id);
        if(this.users.has(parsedID)){
        this.users.delete(parsedID);
        return `Successfully delete User of ID Number ${parsedID}`;
    }
        else 
        return "The id "+id+" does not exist in database!";
      }




      getUserid(id:string){
          var parsedID = parseInt(id);
          if(this.users.has(parsedID))
            return this.users.get(parsedID).toJson();
      }

      patchUser(id:string, newuser: any){
        var parsedID = parseInt(id);
        var temp1: user, temp2: user;
       
        if(this.users.has(parsedID)){
            temp1 = this.users.get(parsedID);
            temp1 = new user (parsedID, newuser?.name, newuser?.age, newuser?.email, newuser?.password); 


            temp2 = this.users.get(parsedID);  
            temp1.patch(temp2);
            if(temp1.checkTypeOf()){
                this.users.set(parsedID,temp1);
                return `Successfully changed User Details of ID ${id}.`;
            }
            else{
                return `Error, Please input the Appropriate Details!`;
            }
            
        }
        else
            return "Error, ID number not found!";
        
    }
      

      login(newuser:any){
          var temp1: user;
          for(const [key,entry] of this.users.entries()){
              temp1 = entry;
              if(temp1.checkLoginDetails(newuser)){
              console.log(key);
              return `Login Succesful! Welcome, ${this.users.get(key).toJson().name}!`;
             
          }
          }

           
            return `Error, Incorrect Email or Password!`;
            
    

      }
        
}
