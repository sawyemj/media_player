import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="text-center">
        <nav className="navbar navbar-default">
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="library" activeClassName="active">Library</Link>
            {" | "}
            <Link to="photos" activeClassName="active">Photos</Link>
            {" | "}
            <Link to="videos" activeClassName="active">Videos</Link>
        </nav>
    </div>
);

export default Header;