const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//reducer
// é onde toda a logica será feita sobre o que fazer com algum estado
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//criaçao da store
// é onde todos os reducers serão usados e conectados na aplicação
const store = createStore(rootReducer);

console.log(store.getState());

//subscribe
// é o que vai ser chamado toda vez que for usado um dispatch
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//metodo dispatch
// é qual reducer vamos chamar com o 'type'
store.dispatch({
    type: 'INC_COUNTER'
})

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
})

console.log(store.getState());

