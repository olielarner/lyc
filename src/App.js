import Hero from "./components/Hero";
import Jagged from "./components/Jagged";
import FirstSection from "./components/FirstSection";
import OurServices from "./components/OurServices";
import OurCrew from "./components/OurCrew";
import OurWork from "./components/OurWork";
import WhoWeAre from "./components/WhoWeAre";
import JaggedRev from "./components/JaggedRev";
import JaggedYellow from "./components/JaggedYellow";

function App() {
    return (
        <div className="App">
            <Hero />
            <Jagged />
            <FirstSection />
            <WhoWeAre />
            <JaggedYellow />
            <OurServices />
            <JaggedRev />
            <OurCrew />
            <Jagged />
            <OurWork />
        </div>
    );
}

export default App;
