import { createStore } from 'redux';

const ADD_TODO = 'add_todo';
const DEL_TODO = 'delete_todo';
const UPD_TODO = 'edit_todo';
 
function todoReducer(state, action) {
    if(action.type == ADD_TODO) {
        const todoText = action.payload.todoText;
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    } else if(action.type == DEL_TODO) {
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId);
    } else if(action.type == UPD_TODO) {
        const todo = action.payload.todo; 
        const todoText = action.payload.todoText; 
        return state.map(t => {
            if(t.id == todo.id) {
                t.text = todoText
            }
            return t;
        })
    }
    return state;
}

const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []);

subscribe(() => console.log(getState()));

dispatch({ type: ADD_TODO, payload: { todoText: 'todo 1' } });
dispatch({ type: ADD_TODO, payload: { todoText: 'todo 2' } });
dispatch({ type: DEL_TODO, payload: { todoId: 1 } });