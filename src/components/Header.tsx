import logo from '@/assets/logo.png'
function Header(): JSX.Element {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-full w items-center justify-between p-6 lg:px-32 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-20 w-20"
                            src={logo}
                            alt=""
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
