const UPDATE_NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const store = {
  _state: {
    dataPosts: [
      {
        id: "1",
        likes: "3",
        text: "My first post from love",
        src: "https://klike.net/uploads/posts/2022-07/1658294080_1.jpg",
      },
      {
        id: 2,
        likes: 23,
        text: "My second post from love",
        src: "https://klike.net/uploads/posts/2022-07/1658294080_1.jpg",
      },
      {
        id: 3,
        likes: 333,
        text: "My widouth love",
        src: "https://klike.net/uploads/posts/2022-07/1658294080_1.jpg",
      },
      {
        id: 4,
        likes: 53,
        text: "My first post",
        src: "https://klike.net/uploads/posts/2022-07/1658294162_29.jpg",
      }
    ],
    dialogPage: {
      dataContacts: [
        { id: 1, name: "Caser" },
        { id: 2, name: "Piter" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Nikol" },
        { id: 5, name: "Batman" },
        { name: "Пёс", id: 6 }
      ],
      dataMessages: [
        { id: 1, text: "Hallo" },
        { id: 2, text: "good morning" },
        { id: 3, text: "i`m fine" },
        { id: 4, text: "gdfsfdhb" },
        { id: 5, text: "654vyhtr" }
      ],
      newMessageBody: ""
    },
    newPostText: "Введи текст блеать"
  },
  getState() {
    return (this._state)
  },
  _renderTree() {
  },
  subscribe(observer) {
    this._renderTree = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        likes: 73,
        text: action.text,
        src: "https://klike.net/uploads/posts/2022-07/1658294162_29.jpg"
      }
      this._state.dataPosts.push(newPost);
      this._renderTree(this._state, this._addPost);
      this._state.newPostText = "";
    } else if (action.type === 'CHANGE-POST') {
      this._state.newPostText = action.newText;
      this._renderTree(this._state, this._addPost);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body;
      this._renderTree(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageBody;
      this._state.dialogPage.dataMessages.push({ id: 6, text: body });
      this._state.dialogPage.newMessageBody = "";
      this._renderTree(this._state)
    }
  }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateMessage = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default store;