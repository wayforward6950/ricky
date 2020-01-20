import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar'
import Characters from './Components/Characters/characters'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFilters : {}
    }
  }

  handleFilterClick(activeFilters) {
    this.setState({activeFilters})
  }

  render() {
    return (
      <main className="main-content">
  
        <aside className="aside-filter">
          <Sidebar handleFilterClick = {this.handleFilterClick.bind(this)} />
        </aside>
        <section className="section-characters">
          <Characters activeFilters = {this.state.activeFilters} />
        </section>
  
      </main>
    );
  }
  
}

export default App;
