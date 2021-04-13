import React from 'react';

class Dexter extends React.Component {
  constructor(props) {
     super(props);
    this.state = { god:'sai'};
    console.log("constructor")
  }
  
  
  render() {
    console.log("render");
    return (
      <h1>{this.state.god}</h1>
     );
  }
  componentWillMount() {
    alert("ram")
    console.log(" componentWillMount")
}
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
   
    console.log("componentDidMount")
  }
}

export default Dexter;

