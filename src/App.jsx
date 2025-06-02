//Тут импорты стилей
import "../src/styles/main.scss";
import '../src/assets/Logo.svg'
// Тут импорты компонентов
import TicketsList from "./components/TicketsList.jsx";
import Tabs from "./components/Tabs.jsx";
import Aside from "./components/Aside.jsx";
import Btn from "./components/Button.jsx";


const App = () => {

      return (
              <div className='app'>
                  <header>
                      <img className='header--img' src='../src/assets/Logo.svg'/>
                  </header>
                  <aside className="filters-menu">
                      <Aside/>
                  </aside>
                  <main className="tickets--menu">
                      <Tabs/>
                      <TicketsList/>
                      <Btn/>
                  </main>
              </div>
      )
}
export default App