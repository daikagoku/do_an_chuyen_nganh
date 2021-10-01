import './App.css';
import TopContact from './components/layout/TopContact'
import Header from './components/layout/Header'
import MainMenu from './components/layout/MainMenu'
import MainSidebar from './components/layout/MainSidebar'
import MainContent from './components/layout/MainContent'
function App() {
  return (
      <section className="body-section">
        <TopContact id="TopContact"/>
        <Header id="Header"/>
        <MainMenu />
        <MainSidebar />
        <MainContent />
     </section>
  );
}

export default App;
