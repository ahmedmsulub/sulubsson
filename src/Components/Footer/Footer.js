import React from 'react'
import './Footer.css'
function Footer(props) {
    return (
        <div>
            <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="footer-pad">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            
            <li>aahmedabdi98@gmail.com</li>
            <li>0736743149</li>
          </ul>
        </div>
      </div>

      
      <div className="container-1">
        <div className="footer-pad">
          {/* <h4>Heading 3</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul> */}
        </div>
      </div>
    	<div className="container-1">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin fa-sm"></i></a></li>
             <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
             <li><a href="https://github.com/ahmedmsulub"><i class="fa fa-github"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2020 - Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
        </div>
    )
}

export default Footer

