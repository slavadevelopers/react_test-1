export const ADD_TODO = 'ADD_TODO';

export function addTodo(give) {
    console.log(give);
    return {
        type: ADD_TODO,
        give
    };
}
