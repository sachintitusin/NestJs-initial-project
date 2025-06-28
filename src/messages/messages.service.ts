import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    messagesRepo:MessagesRepository;

    constructor(){
        this.messagesRepo = new MessagesRepository()
    }

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