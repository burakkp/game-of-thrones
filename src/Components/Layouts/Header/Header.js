import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button className="navbar-burger" href='/' aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <button className="navbar-item">
                        Home
                    </button>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>
                    <div>
                    <a className="navbar-item" href="/">
                    <img src="https://i.ibb.co/BPyx34M/logo.png" width="250" height="150" alt='logo' />
                    </a>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light">
                            Log in
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;