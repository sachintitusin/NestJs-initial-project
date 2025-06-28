import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

/**
 * This method of dependency injection is fine for production. But the best way is
 * to make use of interfaces. This allows us to create swappable dependencies.
 */
@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService){}
    @Get()
    getAllMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    addNewMessage(@Body() body:CreateMessageDto){
        return this.messagesService.create(body.content)
    }
    @Get("/:id")
    async getMessage(@Param('id') id:string){
        const message = await this.messagesService.findById(id)
        if(!message){
            throw new NotFoundException("Message not found!")
        }
        return message
    }

}
