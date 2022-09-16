import React from "react";
import AddBlogForm from "./components/addBlogForm/AddBlogForm";
import EditBlogFom from "./components/editBlogForm/EditBlogFom";
import Bloglist from "./components/bloglist/Bloglist";
import Navbar from "./components/navbar/Navbar";
import BlogContextProvider from "./contexts/BlogContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <BlogContextProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Bloglist />} />

            <Route path="/add" exact component={() => <AddBlogForm />} />

            <Route path="/edit/:id" exact component={() => <EditBlogFom />} />

            {/* <AddBlogForm/> */}
          </Switch>
        </BlogContextProvider>
      </div>
    </Router>
  );
}

export default App;
