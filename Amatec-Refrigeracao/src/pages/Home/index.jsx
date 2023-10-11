import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Forma from "../../components/Forma";
import Marcas from "../../components/Marcas";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Body />
      <Card />
      <Forma />
      <Marcas />
      <Footer />
    </div>
  );
}

export default Home;
