import { v4 as uuidv4 } from 'uuid';

export const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, {
        title: action.blog.title, 
        body: action.blog.body, 
        id: uuidv4()}
      ]
    case 'REMOVE_BLOG':
      return state.filter(blog => blog.id !== action.id);

      case 'EDIT_BLOG' :{
        // state.filter(blog => blog.id !== action.blog.id);
        //  state.blogs.map(blog => {
        //     if(blog.id===action.blog.id)
        //     return [...state,{
        //         title: action.payload.title, 
        //         body: action.blog.body, 
        //         id: action.blog.id
        //     }
        //       ]



         state.filter(blog => blog.id !== action.blog.id);
         return [...state,{
            
            title: action.blog.title, 
            body: action.blog.body, 
            id: action.blog.id
        }
          ] }
    default:
      return state;
  }
}