import { useReducer } from "react";

const initaialState = { count: 0 }
type CounterState = {
    count: number
}

// Discriminated Unions
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
    payload?: number
}

type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initaialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initaialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>

            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    )
}

export default Counter;