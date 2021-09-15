import { Injectable } from '@nestjs/common';
import { Car } from 'src/exercise3/carModel';
import { user } from 'src/exercise3/userClass'

@Injectable()
export class userService {

    private users: Map<string,user> = new Map<string,user>();


    sampleFunction(){
        var car1:Car
    
        car1 = new Car("letsgo", "blue", {name: "kachaw", radius: 10});
        
        return car1.toJson();
    }



    signIn(newuser:any){
        var newUser: user;
        newUser = new user(newuser?.username, newuser?.password, newuser?.age, newuser?.email, {firstName: newuser?.firstName, middleName: newuser?.middleName, lastName: newuser?.lastName});
        this.users.set(newuser.id, newUser);
        this.logAllUsers();
    }


    logAllUsers(){
        for(const [key,user] of this.users.entries()){
          console.log(key);
            user.displayAccountInfo();
        }
    
}
}