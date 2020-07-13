export interface Todo {
	id: string;
	description: string;
	done: boolean;
	writeMode: boolean;
}

interface State {
	loading: boolean;
	todos: Todo[] | null;
}


export const LOAD_TODOS_REQUEST = 'todo/LOAD_TODOS_REQUEST'
export const INSERT_TODO_REQUEST = 'todo/INSERT_TODO_REQUEST'
export const DELETE_TODO_REQUEST = 'todo/DELETE_TODO_REQUEST'
export const CHANGE_TO_INPUT = 'todo/CHANGE_TO_INPUT'

export const loadTodosRequest = () => ({ type: LOAD_TODOS_REQUEST });
export const insertTodoRequest = (text : string) => ({type : INSERT_TODO_REQUEST, text})
export const deleteTodoRequest = (id : string ) => ({ type:DELETE_TODO_REQUEST, id})
export const changeToInput = (id: string) => ({ type: CHANGE_TO_INPUT, id });


export type Action =
	| ReturnType<typeof loadTodosRequest>
	// | ReturnType<typeof loadTodosSuccess>
	// | ReturnType<typeof loadTodosFailure>
	| ReturnType<typeof insertTodoRequest>
	// | ReturnType<typeof insertTodoSuccess>
	// | ReturnType<typeof insertTodoFailure>
	// | ReturnType<typeof updateTodoRequest>
	// | ReturnType<typeof updateTodoSuccess>
	// | ReturnType<typeof updateTodoFailure>
	| ReturnType<typeof deleteTodoRequest>
	// | ReturnType<typeof deleteTodoSuccess>
	// | ReturnType<typeof deleteTodoFailure>
	| ReturnType<typeof changeToInput>
	// | ReturnType<typeof toggleTodoRequest>
	// | ReturnType<typeof toggleTodoSuccess>
	// | ReturnType<typeof toggleTodoFAILURE>

const initialState: State = {
	loading: false,
	todos: null
};


const reducer = (state: State = initialState, action:Action) => {
    switch(action.type) {
    	case LOAD_TODOS_REQUEST:
		case INSERT_TODO_REQUEST:
        case DELETE_TODO_REQUEST:
		case CHANGE_TO_INPUT: {
			const todos = state.todos.map(todo => (todo.id === action.id ? { ...todo, writeMode: true} : todo))
			return {
				...state,
				todos
			}
		}
        default:
            return state
    }
}


export default reducer()