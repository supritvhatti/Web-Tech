import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Fetch posts when the app loads
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <h1>Posts Feed</h1>
            {posts.map(post => (
              <Post key={post._id} post={post} />
            ))}
          </Route>
          <Route path="/login" component={Login} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
