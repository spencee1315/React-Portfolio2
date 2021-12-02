import React from 'react';
// import avatar from '../images/me.jpeg';

function Header() {
    return (
        <main className="container background-trans-50">
          <div className="container-fluid">
				    <div className="row text-center align-items-center">
					    <div className="col">
						    {/* <img src={avatar} alt="User avatar" className="avatar" /> */}
						    <p className="display-6">Elliott Spencer's Portfolio</p>
						    <p> A Full Stack Web Developer</p>
                <p className="lead hide-on-small">
                  Welcome to my portfolio page. Below are a series of projects as I dive deeper into this amazing subject.
                </p>
					    </div>
				    </div>
			    </div>
        </main>
    );
};

export default Header;
