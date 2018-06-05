import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Content/Content';

class App extends Component {

  constructor(props){
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      hotels: [],
      showSidebar: false
    }
    this.searchRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);

  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  componentDidMount(){
    fetch('http://0.0.0.0:1234/hotels')
    .then( results => results.json() )
    .then( data => {
      this.setState({hotels: data});
    })
  }

  
  handleSearch(){
    const inputValue = this.searchRef.current.value;
    fetch(`http://0.0.0.0:1234/hotels?name=${inputValue}`)
    .then( results => results.json() )
    .then( data => {
      this.setState({hotels: data});
    })
  }

  handleStars(num){
    let query = "";
    let arrayStars = [];
    if(num === 0) {
      arrayStars = [];
      this.selectedCheckboxes.clear();
    }else if(this.selectedCheckboxes.has(num)) {
      this.selectedCheckboxes.delete(num);
    } else {
      this.selectedCheckboxes.add(num);
    }
    arrayStars = [...this.selectedCheckboxes];
    
    if(arrayStars.length > 0){
      query = `?stars=[${arrayStars}]`;
    }


    fetch(`http://0.0.0.0:1234/hotels${query}`)
    .then( results => results.json() )
    .then( data => this.setState({hotels: data}))
  }

  handleToggleSidebar(){  
    this.setState({showSidebar: !this.state.showSidebar});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="filter-Toggle" onClick={this.handleToggleSidebar}>Filtrar <span className="triangle"></span></div>
        <section className="App-content">
          <Sidebar show={this.state.showSidebar} handleStars={this.handleStars} checkStars={this.selectedCheckboxes} handleSearch={this.handleSearch} searchRef={this.searchRef} />
          <Content hotels={this.state.hotels}/>
        </section>
      </div>
    );
  }
}

export default App;
