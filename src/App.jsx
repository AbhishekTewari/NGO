import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Compaigns from './components/Compaigns/Compaigns';
import CampaignsCard from './components/CampaignsCard/CampaignsCard';
import Impact from './components/Impact/Impact';
import UpcomingEvents from './components/UpcomingEvent/UpcomingEvent';
import SocialRecognition from './components/SocialRecognition/SocialRecognition';
import CinematicVideo from './components/CinematicVideo/CinematicVideo';
import WaysToHelp from './components/WaysToHelp/WaysToHelp';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Compaigns />
      <UpcomingEvents />
      <CampaignsCard />
      <Impact />
      <CinematicVideo />
      <WaysToHelp />
      <SocialRecognition />
      <Footer />
    </div>
  )
}

export default App
