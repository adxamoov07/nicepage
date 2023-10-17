import './App.css';
import Banner from './components/banner/Banner';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import Text from './components/text/Text';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Text />
      <Cards />
    </div>
  );
}

export default App;
