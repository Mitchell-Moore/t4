import React from "react";
import "./AutoCompleteText.css";
import { Table } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Card from "./component/card";
export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      isSelected: false,
      movie: {},
      cardInfo: [],
      movies:[],
      placeHolder: "Enter a Movie.",
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  onTextChanged = (e) => {
    const { items } = this.props;
    this.setState(() => ({movies: items}))

    const value = e.target.value.toLowerCase();
    console.log(value)
    let suggestions = [];
    if (value.length > 0) {
      //const regex = new RegExp(`^${value}`, "i");
      suggestions = items.filter((v) => v.title.toLowerCase().startsWith(value));
    } else if (value.length === 0) {
      this.setState(() => ({ isSelected: false }));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState({movie: value})

    this.setState(() => ({ isSelected: true }));
    this.setState(() => ({
      cardInfo: [
        {
          title: value.title + "1",
          director: value.director,
          release_year: value.release_year
        },
        {
          title: value.title + "2",
          director: value.director,
          release_year: value.release_year
        },
        {
          title: value.title + "3",
          director: value.director,
          release_year: value.release_year
        },
      ],
    }));
    this.setState(() => ({
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item.title}</li>
        ))}
      </ul>
    );
  }

  renderCards() {
    const { cardInfo } = this.state;
    const { isSelected } = this.state;
    const { movies } = this.state;
    const { title } = this.state;

    var result = movies.filter(function(entry){return entry.title===title});
    result.forEach(function(obj){title = obj.title })
    if (isSelected) {
      return cardInfo.map((index) => (
        <Carousel.Item>
        <Table striped bordered hover >
          <thead>
            <tr>
              <td align="center">
              <Card style={{ width: "18rem" }} onClick={this.handleOnClick} movie={index} handleOnClick={this.handleOnClick}/>
              </td>
            </tr>
          </thead>
        </Table>
        </Carousel.Item>
      ));
    }
  }

  render() {
    const { text } = this.state;
    const {placeHolder} = this.state;
    const {isSelected} = this.state;
    const { movie } = this.state;

    if(isSelected){
      if (this.state.redirect) {
        return <Redirect push to={{
          pathname: "/movie",
          state: { movie }
        }} />;
      }
      return (
        <div className="AutoCompleteText" >
          <div>
            <input value={text} placeholder={placeHolder} onChange={this.onTextChanged} type="text" />
            {this.renderSuggestions()}
          </div>
              <div className="cards">
                <Carousel>
                  {this.renderCards()}
                </Carousel>
              </div>
        </div>
      );
    }
    else{
      return (
        <div className="AutoCompleteText" >
          <div>
            <input value={text} placeholder={placeHolder} onChange={this.onTextChanged} type="text" />
            {this.renderSuggestions()}
          </div>
        </div>
      );
    }
  }
}
