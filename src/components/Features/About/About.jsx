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
          <img src="/SofaCode/SofaCode.jpg" alt="Furniture picture" />
          <p>
            Na B-Interiores, a nossa paixão é criar mobiliário contemporâneo que
            se destaca. <br />
            Oferecemos opções customizáveis que permitem que você imprima sua
            personalidade em cada canto da sua casa.
          </p>
        </div>
        <div className={AboutCSS.right}>
          <img
            src="/CamaAustralia/Cama-Australia(2).jpg"
            alt="Furniture picture"
          />
          <p>
            Com linhas limpas e detalhes cuidadosamente projetados, oferecemos a
            você a oportunidade de personalizar seu ambiente, tornando-o
            verdadeiramente seu. Junte-se a nós para uma experiência única em
            transformação de espaços.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
