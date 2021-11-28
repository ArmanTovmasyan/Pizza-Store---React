const initState = {
    name: "Your Name",
    surName: "Your Surname",
    age: "Your age"
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_SURNAME':
            return {
                ...state,
                surName: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default characterReducer;