export const LOAD_USER_INFO_REQUEST = ''

export const loadUserInfoRequest = () => ({ type: LOAD_USER_INFO_REQUEST })


export type Action =
    |ReturnType<typeof loadUserInfoRequest>


const initialState: State = {
    userInfo: null,
    loading: {
        signup: false,
        login:false,
        logout: false,
        loadUserInfo: false
    },
    error: null
}

const reducer = (state = initialState, action) => {
    switch( action.type) {
    }

}