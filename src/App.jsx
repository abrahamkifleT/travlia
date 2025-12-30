import LandingPage from './pages/LandingPage'
import TravelCard from './component/TravelCard'
import bg1 from './assets/Background.png'
import bg2 from './assets/Background (1).png'
import bg3 from './assets/Background (2).png'
import bg4 from './assets/Background (3).png'

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
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <TravelCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
