import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/create">
                            <Create />
                        </Route>

                        <Route exact path="/blogs/:id">
                            <BlogDetails />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;

// start the json-server:
// npx json-server --watch data/db.json --port 8000
