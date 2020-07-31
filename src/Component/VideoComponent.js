import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import InputBoxComponent from "./inputBox"
import ButtonComponent from "./ButtonComponent"
import VideoListView from "./VideoListView"
import "../Style/Videocomponent.css";
import { bindActionCreators } from "redux";
import  * as commonAction from '../commonAction'
import { connect } from "react-redux";

class VideonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName:"Guardians",
        list:[],
        listLenth:10
    }
  }  
  BtnClick=()=>{
    if(this.state.movieName === ""){
      alert("Please enter movie name")
    }else{
      this.searchVideo(this.state.movieName);
    }
    
  }
  onChange=(e)=>{
   this.setState({
    movieName:e.target.value
   });
  }
  onKeyPress=(e)=>{
    if (e.key === "Enter") {
        this.BtnClick();
   }
  }
  searchVideo=(movieName)=>{
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=212bbf8a&t="+this.state.movieName)
    .then(res => res.json())
      .then(json => {
          this.setState({
            MovieDetails:json
       },()=>{this.props.SearchMovieName(this.state.MovieDetails);});
    });
  }
  componentDidMount() {
     this.searchVideo(this.state.movieName);
  }
  render() {
    return (
      <div className="container VideoListContainer">
       <Col xs={12} lg={12} sm={12} md={12}  className="VideoSearchBox">
             <Col lg={6} sm={6} md={6} xs={8} className="">
                <InputBoxComponent autofocus
                name="search"
                type="text"
                placeholder="Search"
                onChange={this.onChange}
                defaultValue={this.state.movieName}
                onKeyPress={this.onKeyPress}/>
                </Col>
                <Col lg={6} sm={6} md={6} xs={4} className="">
                <ButtonComponent ButtonText="Search" BtnClick={this.BtnClick}/>
              </Col>
          </Col>
          <VideoListView MovieDetails={this.props.MovieDetails} padClass ={this.props.padClass} MobileClass={this.props.MobileClass}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    MovieDetails:state && state.MovieDetails ? state.MovieDetails:"" 
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({},commonAction), dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideonComponent);

