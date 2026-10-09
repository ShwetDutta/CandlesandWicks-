import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
import { Premise } from './components/sections/Premise';
import { Approach } from './components/sections/Approach';
import { StartHere } from './components/sections/StartHere';
import { Founders } from './components/sections/Founders';
import { Statement } from './components/sections/Statement';
import { Community } from './components/sections/Community';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/layout/Footer';
import { StickyCta } from './components/layout/StickyCta';

export function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-hanken selection:bg-[var(--mint)] selection:text-[var(--on-mint)]">
      <Nav />
      <main id="main-content">
        <Hero />
        <Premise />
        <Approach />
        <StartHere />
        <Founders />
        <Statement />
        <Community />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;
