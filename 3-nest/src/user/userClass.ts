export class user {

    private username:string;
    private name: string;
    private id:string; 
    private age: number;
    private email: string;
    private password: string

    constructor(username:string, password:string, age:number, email:string, name: string){
        this.username = username;
        this.password = password;   
        this.age = age;
        this.email = email;
        this.name = name;
        // this.id = id;


       
       
    }


    
    displayAccountInfo(){
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log("-------------------------");
        console.log("Account Information");
        console.log(`Full Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`email: ${this.email}`);
        console.log("-------------------------");
    }

    toJson(){
        return {
            username:this.username,
            name:this.name,
            age:this.age,
            email:this.email,
            
        };
    }

    toJson1(message: string){
        return {
            message: message
        };
    }
//}
logIn(email:string, password:string){
    if(email == this.email && password == this.password)
    return this.toJson1("Login Succesful");
    else
    return this.toJson1("Error, Username or Password not found");
}

}