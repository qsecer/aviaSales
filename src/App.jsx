import "../src/styles/main.scss";
import '../src/assets/Logo.svg'


import TicketsMenu from "./components/TicketsMenu.jsx";
import Tabs from "./components/Tabs.jsx";
import CheckBox from "./components/CheckBox.jsx";


const App = () => {
      return (
          <div className='app'>
            <header>
                <img className='header--img' src='../src/assets/Logo.svg'/>
            </header>
            <aside className="filters-menu">
                <CheckBox/>
            </aside>
            <main className="tickets--menu">
                <Tabs/>
              <div>
                  <TicketsMenu/>
              </div>
            </main>
          </div>

      )
}
export default App