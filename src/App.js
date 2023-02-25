import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from './Layouts/Aside/Aside';
import Nav from './Layouts/Nav/Nav';
import Footer from './Layouts/Footer/Footer';
import {Dashboard,Visions} from './Layouts/Content';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <Aside />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden">
          <Nav />
          <div className="container-fluid py-4">
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/visions" element={<Visions />} />
            </Routes>

            <Footer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
