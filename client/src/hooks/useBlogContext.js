import { useContext } from "react";
import { BlogContext } from "../context/blogContext";

const useBlogContext = () => {
  const context = useContext(BlogContext);
  return context;
};

export default useBlogContext;
