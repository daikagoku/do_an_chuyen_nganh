import './App.css';
import TopContact from './components/layout/TopContact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainMenu from './components/layout/MainMenu'
import MainSidebar from './components/layout/MainSidebar'
import MainContent from './components/layout/MainContent'
function App() {
  return (
      <section id="body-section">
        <TopContact/>
        <Header/>
        <MainMenu />
        <MainSidebar />
        <MainContent />
        <Footer />

     </section>
  );
}

export default App;
