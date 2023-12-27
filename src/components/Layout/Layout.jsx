import Header from './../Header/Header.jsx';
import Intro from './../Intro/Intro.jsx';
import Services from './../Services/Services.jsx';
import Users from './../Users/Users.jsx';
import Footer from './../Footer/Footer.jsx';

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Intro />
                <Services />
                <Users />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
