export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing
    // token: "BQDEZYm4XSy_G3uyWUGCivx7UmR7EJlXeYPHabbYmtKsY7Dpkb0le_-JXsDO7gtW3dKqHi7DccWIVnL6KymenQbZ3QXBG8yf__MtwnDg2_rH97Z_heu1BeIJNLloV24vICecmFfzqYRu4S08t8QIuJVLTCBLRz58qcZ7f7t-NLejlqyUK_vL",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,  // keep whatever is there in current state
                user: action.user // just update user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        default:
            return state;
    }
};

export default reducer;