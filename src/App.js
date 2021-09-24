import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Society from './components/Society'
import Plaza from './components/Plaza'
import Apartment from './components/Apartment'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Contact from './components/Contact'
import Quote from './components/Quote'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <Society type="Society" feature="Featured Society"/>
      <Plaza type="Plaza" feature="Feature Plaza"/>
      <Apartment type="Our Recommendation" feature="Apartment For Sale"/>
      <Reviews type="See Our Review" feature="What Our User Say About Us"/>
      <Blog type="See Tips And Tricks From Our Blogs" feature="Our Blogs"/>
      <Quote/>
      <Contact/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
