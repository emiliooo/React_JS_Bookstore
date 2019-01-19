const InitialState = {
    book: {
        name:"Book name from",
        author: "Author from store"
    }
}


const adminPanelReducer = (state = InitialState ,action) => {
    switch(action.type) {
        default:
          console.log('Unknown action' + action.type);
          return state;
    }

}

export default adminPanelReducer;