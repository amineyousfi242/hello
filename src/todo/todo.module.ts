import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';


@Module({
    imports:[
       TypeOrmModule.forFeature([Todo])
    ],
    providers: [TodoService],
    controllers:[TodoController],
})
export class TodoModule {}
