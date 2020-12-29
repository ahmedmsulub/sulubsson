import React from 'react'
function Footer(props) {
    return (
      <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            {/* <h4>THICC MEMES INC</h4> */}
            <h1 className="list-unstyled">
              {/* <li>073-674-31-49</li>
              <li>aahmedabdi98@gmail.com</li>
              <li>växjö</li> */}
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            {/* <h4>Stuff</h4> */}
            <ui className="list-unstyled">
            <li>073-674-31-49</li>
              <li>aahmedabdi98@gmail.com</li>
              <li>växjö</li>
            </ui>
          </div>
          {/* Column3 */}
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MADE BY SULUBSSON | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    )
}

export default Footer

