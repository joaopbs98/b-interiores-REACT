import React from "react";
import AboutCSS from "./style.module.scss";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

function About(props) {
  return (
    <div className={AboutCSS.div}>
      <div className={AboutCSS.content}>
        <div className={AboutCSS.head}>
          <hr />
          <SectionTitle content="Sobre Nós" />
        </div>
      </div>
      <div className={AboutCSS.top}>
        <p>
          Bem-vindo ao nosso mundo de elegância intemporal e conforto refinado.
          Adentre um universo onde a simplicidade encontra o luxo, e cada
          detalhe conta uma história. Descubra peças meticulosamente trabalhadas
          que transformam o seu espaço num santuário de estilo e serenidade.
        </p>
      </div>
      <div className={AboutCSS.years}>
        <span>23+</span>
        <p>anos de experiência</p>
      </div>
      <div className={AboutCSS.years}>
        <span>500+</span>
        <p>projetos realizados</p>
      </div>
      <div className={AboutCSS.down}>
        <div className={AboutCSS.left}>
          <img
            src="https://images.unsplash.com/photo-1684846416931-dddf8cbfc2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Furniture picture"
          />
          <p>
            Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar
            commodo orci, suscipit porttitor velit elementum non. Fusce nec
            pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis
            turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam,
            id tincidunt quam placerat consequat. Nulla eu laoreet ex.
            Vestibulum nec vulputate turpis, id euismod orci. Phasellus
            consectetur
          </p>
        </div>
        <div className={AboutCSS.right}>
          <img
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Furniture picture"
          />
          <p>
            Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar
            commodo orci, suscipit porttitor velit elementum non. Fusce nec
            pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis
            turpis nec, sollicitudin sodales tortor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
