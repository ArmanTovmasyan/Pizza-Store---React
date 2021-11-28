const initState = {
    feedbackMessage: [
        {
            id: 1,
            content: 'Your feedback is highly appreciated and will help us to improve'
        }
    ]
}

const NewMessageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                feedbackMessage: [
                    ...state.feedbackMessage,
                    action.payload
                ]
            }
        case 'REMOVE_MESSAGE':
            return {
                ...state,
                feedbackMessage: action.payload
            }
        default:
            return state
    }
}

export default NewMessageReducer;