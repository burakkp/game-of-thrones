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
                    
                    </div>
                    <div>
                    <a className="navbar-item" href="/">
                    <img src="https://i.ibb.co/BPyx34M/logo.png" width="250" height="150" alt='logo' />
                    </a>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;