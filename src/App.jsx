import { useState } from 'react'
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Compaigns from './components/Compaigns/Compaigns';
import CampaignsCard from './components/CampaignsCard/CampaignsCard';
import Impact from './components/Impact/Impact';
import UpcomingEvents from './components/UpcomingEvent/UpcomingEvent';

function App() {

  return (
    <div className="App">
      <Header />
      <UpcomingEvents />
      <HeroBanner />
      <Compaigns />
      <CampaignsCard />
      <Impact />
    </div>
  )
}

export default App
