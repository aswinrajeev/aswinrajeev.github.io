export default function Header() {
    return (
        <header className="header">
            <a className="logo-link" href="/"><img className="logo clickable adaptive" src="/aswinrajeev.webp" alt="Aswin Rajeev logo"/></a>
            <nav className="navbar">
                <ul className="nav-list">
                    <a href="/"><li className="nav-link">Home</li></a>
                    <a href="https://blog.aswin.me"><li className="nav-link">Blog</li></a>
                    <a href="#"><li className="nav-link">Works</li></a>
                    <a href="/about"><li className="nav-link">About</li></a>
                    <a href="#"><li className="nav-link">Contact</li></a>
                </ul>
            </nav>
      </header>
    );
}