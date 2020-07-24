import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            {/* <img className="profile-pic"  src={profilepic} alt="SULUBSSON" /> */}
         </div>
         <div className="nine columns main-col">
            <h2>About</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  {/* <h2>Contact Details</h2> */}
                  <p className="address">
						   
					   </p>
               </div>
               <div className="columns download">
                  
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
