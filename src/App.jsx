import './styles/main.scss';
import logo from './assets/Logo.svg';

import TicketsList from "./components/TicketsList.jsx";
import Tabs from "./components/Tabs.jsx";
import Aside from "./components/Aside.jsx";
import Btn from "./components/Button.jsx";

const App = () => {
    return (
        <div className='app'>
            <header>
                <img className='header--img' src={logo} alt="Logo" />
            </header>
            <aside className="filters-menu">
                <Aside />
            </aside>
            <main className="tickets--menu">
                <Tabs />
                <TicketsList />
                <Btn />
            </main>
        </div>
    );
};

export default App;
