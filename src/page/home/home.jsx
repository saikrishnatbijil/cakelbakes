import { Footer, Hero, Navbar, Shop } from "../../components";

function home({ isHome }) {
  return (
    <>
      <Navbar />
      <div className="marginContainer">
        <Hero />
      </div>
      <Shop isHome={isHome}/>
      <Footer />
    </>
  );
}

export default home;
