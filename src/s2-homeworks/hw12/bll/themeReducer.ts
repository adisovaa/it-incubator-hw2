type InitialState = typeof initState

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialState = initState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.payload.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', payload: {id}}) // fix any

type changeThemeIdActionType = ReturnType<typeof changeThemeId>

type ActionType = changeThemeIdActionType