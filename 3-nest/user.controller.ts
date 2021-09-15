import { Controller, Body, Get, Param, Post } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class userController {
    constructor(private readonly user: userService){}

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