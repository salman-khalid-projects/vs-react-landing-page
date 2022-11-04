import './App.css';
import vs_01 from "./assets/hero1.jpg";
import vs_02 from "./assets/main1.jpg";
import vs_03 from "./assets/services1.jpg";
import vs_04 from "./assets/realState1.jpg";
import vs_05 from "./assets/landingPage1.jpg";
import vs_06 from "./assets/products1.jpg";
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';


const navbarLinks = [
  {url: "#", title:"Home"},
  {url: "#", title:"Our Mession"},
  {url: "#", title:"Live Chat"}
]
function App() {
  return (
    <div className="App">
      <Navbar navbarlinks={navbarLinks} />
      <Hero imageSrc={vs_05} />
      <Slider imageSrc={vs_06} title={"Products"} subtitle={"Providing various of smart devices related products"}/>
      <Slider imageSrc={vs_01} title={"Services"} subtitle={"Providing multiple E-services e.g(ecommerce websites, portfolios and more.."} flipped={false}/>
      <div className='comming__soon'>
        <Slider imageSrc={vs_02} title={"Real States"} subtitle={"Providing multiple places and sites for rent."} subtitle2={" Comming soon.."}/>
      </div>
    </div>
  );
}

export default App;
