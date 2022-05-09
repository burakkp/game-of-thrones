import './App.scss';
import Header from "./Components/Layouts/Header/Header";
import Footer from './Components/Layouts/Footer/Footer';
import { GOTProvider } from './Contexts/Context';
import CharacterPage from './view/CharacterPage';

function App() {

  return (
    <div className="App">
      <Header />
        <GOTProvider>
          <CharacterPage/>
        </GOTProvider>
      <Footer/>
    </div>
  );
}

export default App;