export class user {
    private id: number;
    private name:string;
    private age: number;
    private email: string;
    private password: string

    constructor(id:number, name:string, age:number, email:string, password: string){
        this.name = name;
        this.password = password;   
        this.age = age;
        this.email = email;
        this.id = id;


       
       
    }
    compare(user: user){
        if((this.name !== user.name) && (this.age !== user.age) && (this.email !== user.email) && (this.password !== user.password)){
            return true;
        }
        else{
            return false;
        }
    }

    
    displayAccountInfo(){
        console.log(`Username: ${this.name}`);
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
            id:this.id,
            email:this.email,
            name:this.name,
            age:this.age,
            password:this.password,
            
            
        }
    }

    checkLoginDetails(user: any){
        if(this.email === user.email && this.password === user.password)
            return true;
            // else if(this.email === user.email && !(this.password === user.password))
            //     return false;
            
            // else if(!(this.email === user.email) && this.password === user.password)
            //     return false;
            
        
        else
            return false;
        
    }

    patch(user: user){
        if(!(this.name)){
            this.name = user.name;
        }
        
        
        if(!(this.age)){
            this.age = user.age;
        
       
        }
        if(!(this.email)){
            this.email = user.email;
        }
        if(!(this.password)){
            this.password = user.password;
        }
    }

    checkTypeOf(){
        var num:number = 1;
        var string = "string";
        if((typeof this.id === typeof num) && (typeof this.name === typeof string) &&  (typeof this.age === typeof num) && 
            (typeof this.email === typeof string) && (typeof this.password === typeof string)){
            return true;
        }
        else{
            return false;
        }
    }




    
}

