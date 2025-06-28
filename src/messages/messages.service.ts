import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    /**
     * Some syntactic sugar here. When you see constructo params as pubilc,
     * know that these parameters are automatically being assigned for us.
     * No manual variable creation or assignment needed.
     * @param messagesRepo 
     */
    constructor(public messagesRepo: MessagesRepository){}

    findById(id: string){
        return this.messagesRepo.findById(id)
    }
    findAll(){
        return this.messagesRepo.findAll()
    }
    create(content: string){
        return this.messagesRepo.create(content)
    }

}