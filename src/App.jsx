import LandingPage from './pages/LandingPage'
import TravelCard from './component/TravelCard'
import bg1 from './assets/Background.png'
import bg2 from './assets/Background (1).png'
import bg3 from './assets/Background (2).png'
import bg4 from './assets/Background (3).png'
import GettoKnowUs from './pages/GetToKnowUs'
import TopSelling from './pages/TopSelling'
import GetToKnowUs1 from './pages/GetToKnowUs1'
import GetToKnowUs2 from './pages/GetToKnowUs2'
import GetToKnowContainer from './pages/GetToKnowContainer'
import GetToKnowUsPople from './pages/GetToKnowUsPople'
import GetToNowUsGallery from './pages/GetToNowUsGallery'
import GetToKnowUs4 from './pages/GetToKnoUs4'
import GetToKnowUs5 from './pages/GetToKnowUs5'
import Footer from './pages/Footer'

function App() {

  const cards = [
    { image: bg1, title: "Vip Beaches", description: "No one shall be subjected to arbitrary arrest, detention or exile. Everyone" },
    { image: bg2, title: "Luxury Resorts", description: "Experience the ultimate comfort and style in our exclusive resorts." },
    { image: bg3, title: "Mountain Views", description: "Breathtaking sceneries that will leave you speechless and inspired." },
    { image: bg4, title: "City Lights", description: "Discover the vibrant life of the city that never sleeps." }
  ]

  return (
    <div>
      <LandingPage />
      {/* Desktop View: Grid */}
      <div className="container mx-auto px-4 py-10 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <TravelCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Mobile View: Infinite Carousel (Left to Right) */}
      <div className="md:hidden w-full overflow-hidden py-10">
        <div className="flex gap-6 animate-marquee-reverse w-max">
          {/* Original Set */}
          {cards.map((card, index) => (
            <div key={`mobile-${index}`} className="w-72 shrink-0">
              <TravelCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
          {/* Duplicate Set for Loop */}
          {cards.map((card, index) => (
            <div key={`mobile-dup-${index}`} className="w-72 shrink-0">
              <TravelCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      <GettoKnowUs />
      <TopSelling />
      <GetToKnowUs1 />
      <GetToKnowUs2 />
      <GetToKnowContainer />
      <GetToKnowUsPople />
      <GetToNowUsGallery />
      <GetToKnowUs4 />
      <GetToKnowUs5 />
      <Footer />
    </div>
  )
}

export default App
