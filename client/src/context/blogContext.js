import { useReducer, createContext } from "react";
export const BlogContext = createContext();

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { blogs: action.payload };
    case "CREATE_BLOG":
      return { blogs: [...state.blogs, action.payload] };
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter((blog) => blog._id !== action.paylod),
      };
    default:
      return state;
  }
};

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { blogs: null });

  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
