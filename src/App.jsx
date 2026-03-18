import "./App.css";
import Banner from "./Components/Banner";
import EditorsPick from "./Components/EditorPick";
import Feature from "./Components/Feature";
import FeatureBanner from "./Components/featureBanner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import PromoSection from "./Components/PromoSection";

function App() {


  return (
    <>
    <Header />
    <Banner />
    <EditorsPick />
    <Products />
    <FeatureBanner />
    <PromoSection />
    <Feature />
    <Footer />
    </>
  );
}

export default App;