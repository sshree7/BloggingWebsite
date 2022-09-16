import React, { createContext, useReducer, useEffect } from "react";
import { blogReducer } from "../reducers/blogReducer";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogs, dispatch] = useReducer(
    blogReducer,
    [
      {
        title: "Costa Rica",
        body: "From what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagine From what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagine From what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagine From what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagine",
        id: 1,
      },
      {
        title: "Peru",
        body: "From what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagineFrom what I Have heard and read Costa Rica is truly a playground of nature consisting of 27 National Parks dotted across the country  Can you imagine",
        id: 2,
      },
    ],
    () => {
      const localData = localStorage.getItem("blogs");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
