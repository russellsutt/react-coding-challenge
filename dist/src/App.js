import Header from './components/Header'
import Footer from './components/Footer'
import './css/App.css'


export const API = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
