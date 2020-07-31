import React, { Component } from 'react';
import { Col,Row } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent"
import "../Style/Videocomponent.css"
class VideoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  
  BtnClick=(id)=>{
      window.open("https://www.youtube.com/watch?v="+id.trim(), "_blank");
  }
  render() {
    return (
        <Col xs={12} lg={12} sm={12} md={12} className="VideoSearchBox">
        <Col xs={12} lg={6} sm={6} md={6}>
          <img src={this.props.MovieDetails && this.props.MovieDetails.Poster ? this.props.MovieDetails.Poster:"" } alt="Movie"/>
        </Col>
         <Col xs={12} lg={6} sm={6} md={6}>
            <div className="Pad10">
             <LabelComponent LableClass = "Title" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Title ? 
             this.props.MovieDetails.Title:"Movie not found"} />
             <LabelComponent LableClass = "PadSide" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Year ? 
             "("+this.props.MovieDetails.Year+")":""}/>
         </div>
         {this.props.MovieDetails && this.props.MovieDetails.Response === true ? (<div>
           <div className="Pad10">
           <LabelComponent LableClass = "PadSide" 
           labelText={this.props.MovieDetails && this.props.MovieDetails.Rated ? 
           this.props.MovieDetails.Rated:""} />

           <LabelComponent LableClass = "" 
           labelText={" | "} />

          <LabelComponent LableClass = "PadSide" 
          labelText={this.props.MovieDetails && this.props.MovieDetails.Runtime? 
          this.props.MovieDetails.Runtime:""} />

          <LabelComponent LableClass = "" labelText={" | "} />

          <LabelComponent LableClass = "PadSide" 
          labelText={this.props.MovieDetails && this.props.MovieDetails.Genre ? 
          this.props.MovieDetails.Genre:""} />

          <LabelComponent LableClass = "" labelText={" | "} />

          <LabelComponent LableClass = "PadSide" 
           labelText={this.props.MovieDetails && this.props.MovieDetails.Released? 
           this.props.MovieDetails.Released+
           "("+this.props.MovieDetails.Country+")":""} />

          <LabelComponent LableClass = "" labelText={" | "} />

          <LabelComponent LableClass = "PadSide" 
          labelText={this.props.MovieDetails && this.props.MovieDetails.Language ? 
          this.props.MovieDetails.Language:""} />
         </div>
         </div>):""}
         

         <div className="Pad10">
         {this.props.MovieDetails && this.props.MovieDetails.Actors ?(  <LabelComponent LableClass = "SubTitle" 
             labelText={"Actors : "} />):""}
             <LabelComponent LableClass = "" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Actors ? 
             this.props.MovieDetails.Actors:""}/>
         </div>

         <div className="Pad10">
         {this.props.MovieDetails && this.props.MovieDetails.Awards?(<LabelComponent LableClass = "SubTitle" 
             labelText={"Awards : "} />):""}
             <LabelComponent LableClass = "" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Awards?
             this.props.MovieDetails.Awards:""}/>
         </div>

         <div className="Pad10">
         {this.props.MovieDetails && this.props.MovieDetails.Director ? (<LabelComponent LableClass = "SubTitle" 
             labelText={"Director : "} />):""}
             <LabelComponent LableClass = "" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Director ? 
             this.props.MovieDetails.Director:""}/>

         </div>

         <div className="Pad10">
         {this.props.MovieDetails && this.props.MovieDetails.Writer ? (<LabelComponent LableClass = "SubTitle" 
             labelText={"Writers : "} />):""}
             <LabelComponent LableClass = "" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Writer ? 
             this.props.MovieDetails.Writer:""}/>
         </div>

         <br/><br/>

         <div className="Pad10">
             <LabelComponent LableClass = "PadSide" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Metascore? 
             this.props.MovieDetails.Metascore+" Metascore":""} 
             />

             <LabelComponent LableClass = "PadSide" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.imdbRating? 
             this.props.MovieDetails.imdbRating+" Rating":""}/>

             <LabelComponent LableClass = "PadSide" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.imdbVotes? 
             this.props.MovieDetails.imdbVotes+" (Votes)":""}/>
          </div>

           <div>
             <br/><br/>      
             {this.props.MovieDetails && this.props.MovieDetails.Plot ?(<LabelComponent LableClass = "SubTitle" 
             labelText={"Plot : "} />):""}                
             <LabelComponent LableClass = "" 
             labelText={this.props.MovieDetails && this.props.MovieDetails.Plot ? 
             this.props.MovieDetails.Plot:""}/>
           </div>
           </Col>
        </Col>
        
    );
  }
}
class LabelComponent extends React.Component {
  render(){
    return(
        <span className={this.props.LableClass}>
          {this.props.labelText}
        </span>
    )
  }
}

export default VideoListView;
