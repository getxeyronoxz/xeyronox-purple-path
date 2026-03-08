import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import TerminalSection from '@/components/TerminalSection';
import ChannelSection from '@/components/ChannelSection';
import ProjectsSection from '@/components/ProjectsSection';
import ToolsSection from '@/components/ToolsSection';
import ManifestoSection from '@/components/ManifestoSection';
import CollectiveSection from '@/components/CollectiveSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <TerminalSection />
        <ChannelSection />
        <ProjectsSection />
        <ToolsSection />
        <ManifestoSection />
        <CollectiveSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
