import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { Inject, Injectable } from '@angular/core'
import { TODO_REPOSITORY_TYPE } from '../../../core/types'
import { Query } from '../../../core/types/query'

@Injectable({
  providedIn: 'root',
})
export class GetAllTodosQry extends Query<Todo[]> {
  constructor(@Inject(TODO_REPOSITORY_TYPE) private readonly todoRepository: TodoRepository) {
    super()
  }

  internalExecute(): Promise<Todo[]> {
    return this.todoRepository.findAll()
  }
}
