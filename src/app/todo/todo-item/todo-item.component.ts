import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @ViewChild('txtInputFisico') txtInputFisico : ElementRef;

  checkField: FormControl;
  textInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado );
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe( () =>{
        const accion = new ToggleTodoAction( this.todo.id );
        this.store.dispatch(accion);
    })
  }

  editar(){
    this.editando = true;
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  terminarEdicion(){
    this.editando = false;

    if(this.textInput.invalid){
      return;
    }

    if(this.textInput.value == this.todo.texto){
      return;
    }

    const action = new EditarTodoAction(this.todo.id,this.textInput.value);
    this.store.dispatch(action);
  }

  borrarTodo(){
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
