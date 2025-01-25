import React from "react";
import Card from "./components/Card";
import "./App.css";

const auroraEvents = [
  {
    title: "Aurora Borealis 101",
    image: "./assets/aurora101.webp",
    description: "Learn the science behind the Northern Lights.",
    link: "https://example.com/aurora-101",
  },
  {
    title: "Best Viewing Spots",
    image: "./assets/viewing-spots.webp",
    description: "Discover top spots to see the auroras.",
    link: "https://example.com/best-spots",
  },
  {
    title: "Aurora Photography Tips",
    image: "./assets/photography-tips.webp",
    description: "Capture stunning photos of the Northern Lights.",
    link: "https://example.com/photography",
  },
  {
    title: "Northern Light Legends",
    image: "./assets/northern-legends.webp",
    description: "Explore the myths and stories surrounding the auroras.",
    link: "https://example.com/legends",
  },
  {
    title: "Best Time to See Auroras",
    image: "./assets/best-time.webp",
    description: "Find out when to catch the best aurora displays.",
    link: "https://example.com/timing",
  },
  {
    title: "Aurora Apps and Tools",
    image: "./assets/apps-tools.webp",
    description: "The best apps and tools to track aurora activity.",
    link: "https://example.com/apps-tools",
  },
  {
    title: "Northern Lights in Tromsø",
    image: "./assets/tromso.webp",
    description: "Discover the breathtaking auroras in Tromsø, Norway.",
    link: "https://example.com/tromso",
  },
  {
    title: "Aurora Cruises",
    image: "./assets/aurora-cruises.webp",
    description: "Set sail and enjoy aurora views from the sea.",
    link: "https://example.com/cruises",
  },
  {
    title: "Auroras and Space Weather",
    image: "./assets/space-weather.webp",
    description: "Understand the connection between auroras and space weather.",
    link: "https://example.com/space-weather",
  },
  {
    title: "Camping Under the Auroras",
    image: "./assets/camping.webp",
    description: "The ultimate guide to camping under the Northern Lights.",
    link: "https://example.com/camping",
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Aurora Explorer</h1>
      <div className="card-container">
        {auroraEvents.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            image={event.image}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
