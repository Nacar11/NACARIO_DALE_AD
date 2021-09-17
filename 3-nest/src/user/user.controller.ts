import { Controller, Body, Get, Param, Post, Put, Delete, Patch} from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly user: UserService){}

    @Get("/sample")
    test(){
        return this.user.sampleFunction();
    }
    

    @Get(`/getUser/all`)
    getAll(@Param("id") id: string){
        return this.user.getAll(id);
    }



    @Post("/register/")
    register(@Body() body:any){
        
        return this.user.register(body);
    
    }


    @Put(`changeUserDetails/:id`)
    changeUserDetails(@Param("id") id:string, @Body() body: any){
        return this.user.changeUserDetails(id,body); 
    }

       

    @Get(`/getUser/:id`)
    getUserid(@Param("id") id: string){
        return this.user.getUserid(id);
    }
    @Delete('/deleteUser/:id')
    deleteuser(@Param("id") id:string) {
      return this.user.deleteUser(id);
    }

   @Patch(`patchUser/:id`)
   patchUser(@Param("id") id:string, @Body() body:any){
       return this.user.patchUser(id,body);
   }

   @Post("/login")
   login(@Body() body:any){
       return this.user.login(body);
   }

   @Get("search/:term")
   getUserSearch(@Body() body:any){
       return this.user.getUserSearch(body);
   }
    }
