import HeroCSS from "./style.module.scss";
import ImageSlider from "../../Features/ImageSlider/ImageSlider";
function Hero(props) {
  return (
    <div className={HeroCSS.hero}>
      <div>
        <div className={HeroCSS.HeroText}>
          <h1>Mobiliário Exclusivo, Talhado para Si.</h1>
        </div>
        <div className={HeroCSS.HeroInfo}>
          <span>— Desde 1998</span>
          <p>Design. Planeamento. Execução.</p>
        </div>
      </div>
      <div>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
}

export default Hero;
