import { Controller, Body, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly user: UserService){}

    @Get("/sample/")
    test(){
        return this.user.sampleFunction();
    }
    
    @Post("/signIn/")
    signIn(@Body() body:any){
        console.log(body);
        return body;
    
    }
}
