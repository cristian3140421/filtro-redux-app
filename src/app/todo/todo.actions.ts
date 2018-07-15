import { Action } from '@ngrx/store';
import { Todo } from './model/todo.model';
export const GREGAR_TODO = "[TODO] Agregar todo";
export const TOGGLE_TODO = "[TODO] Toggle todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle  all todo";
export const EDITAR_TODO = "[TODO] Editar todo";
export const BORRAR_TODO = "[TODO] Borrar todo";
export const CLEAN_COMPLETE = "[TODO] clean todo";



export class AgregarTodoAction implements Action{
    readonly type = GREGAR_TODO;
    
    constructor(public texto:string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    
    constructor(public id:number){}
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO;
    
    constructor(public completado: boolean){}
}

export class EditarTodoAction implements Action{
    readonly type = EDITAR_TODO;
    
    constructor(public id: number, public texto: string){}
}

export class BorrarTodoAction implements Action{
    readonly type = BORRAR_TODO;
    
    constructor(public id: number){}
}

export class CleanCompleteTodoAction implements Action{
    readonly type = CLEAN_COMPLETE;
}

export type acciones = AgregarTodoAction | 
                       ToggleTodoAction |
                       ToggleAllTodoAction |
                       EditarTodoAction |
                       BorrarTodoAction |
                       CleanCompleteTodoAction;