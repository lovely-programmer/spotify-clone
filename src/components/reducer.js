export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: "BQC0rkB585jUFysP3XxSMCgrtAjOaNaFPT9ZHEwFKz38-TO25YSAasg-jekw4tgLR7tDIwVtBrxqA7_8n31vcKECnK2gBiRIQYjbhFNod_yA4jbwrhbGsY6xczzkFKs7SCj8Y-mbIXuylSDRUhaomGr4Z-WOfJfya64viBLfjPwjvh-1",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLIST":
      return { ...state, playlists: action.playlists };

    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover: action.discover };

    case "ALBUM_IMAGE":
      return {...state, album: action.album};

    default:
      return state;
  }
};

export default reducer;
