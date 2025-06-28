import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

/**
 * Providers means things other classes can use as
 * dependencies to be injected.
 * 
 * Note: Dependency container keeps the objects already created in memory.
 * Wherever this one dependency is requested, the same object is shared. This is 
 * important to know. There are workarounds for this as well.
 */
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}
