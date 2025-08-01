import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../index.css";

const CarouselHero = () => {
  const depoimentos = [
    {
      autor: "Ana Carolina Silva",
      msg: "Atendimento impecável! A equipe demonstrou um preparo e conhecimento que me deixaram muito segura durante todo o processo. Recomendo fortemente!",
    },
    {
      autor: "Pedro Henrique Costa",
      msg: "Fiquei impressionado com a organização e a clareza nas explicações. É nítido o quanto eles se dedicam a cada caso. Excelentes profissionais!",
    },
    {
      autor: "Mariana Rodrigues Lima",
      msg: "Desde o primeiro contato, percebi o profissionalismo e a seriedade. Resolveram meu problema trabalhista com agilidade e competência. Parabéns!",
    },
    {
      autor: "João Gabriel Pereira",
      msg: "Serviço de altíssima qualidade! Os advogados são extremamente preparados e atenciosos, tirando todas as minhas dúvidas e me guiando passo a passo.",
    },
    {
      autor: "Beatriz Almeida Santos",
      msg: "A melhor escolha que fiz! A equipe é muito bem preparada, domina a legislação trabalhista e conseguiu um resultado muito favorável para o meu caso.",
    },
    {
      autor: "Fernando Lucas Oliveira",
      msg: "Confiança é a palavra que define este escritório. Eles entendem o que fazem e se dedicam para oferecer o melhor suporte jurídico. Super recomendo!",
    },
    {
      autor: "Camila Ferreira Souza",
      msg: "Experiência incrível! O preparo da equipe foi fundamental para a resolução do meu problema. Me senti amparada e bem orientada em cada etapa.",
    },
    {
      autor: "Gustavo Gomes Ribeiro",
      msg: "Profissionais qualificados e com um atendimento humano. Fui muito bem recebido e tive todas as minhas expectativas superadas pelo preparo da equipe.",
    },
    {
      autor: "Larissa Mendes Carvalho",
      msg: "Precisei de ajuda em uma questão trabalhista complexa e o escritório demonstrou um preparo exemplar, resultando em uma vitória para mim. Agradeço muito!",
    },
    {
      autor: "Rafael Nunes Barbosa",
      msg: "Agradeço a toda a equipe pelo excelente trabalho. O preparo e a dedicação de cada um fizeram a diferença. São, sem dúvida, referência em advocacia trabalhista!",
    },
  ];

  const responsiveOptions = [
    { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // até 640px
    { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // até 1023px
    { breakpoint: 3000, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // acima disso
  ];

  const defaultSettings = { slidesToShow: 3, slidesToScroll: 1 };

  const currentSettings = () => {
    const width = window.innerWidth;
    if (width > 3000) return defaultSettings;
    return (
      responsiveOptions.find((option) => width <= option.breakpoint)
        ?.settings || defaultSettings
    );
  };

  const carouselRef = useRef(null);
  const autoplaySpeed = 10000; // 10 segundos
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const step = 100 / (autoplaySpeed / 100); // quanto aumenta por 100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          // garante que vai preencher 100% antes de trocar
          setTimeout(() => {
            carouselRef.current.next();
            setProgress(0); // reseta para o próximo ciclo
          }, 200); // pequeno delay para mostrar a barra cheia
          return 100;
        }
        return prev + step;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  const handleBeforeChange = () => setProgress(0);

  const goToPrevSlide = () => {
    carouselRef.current.prev();
    setProgress(0);
  };

  const goToNextSlide = () => {
    carouselRef.current.next();
    setProgress(0);
  };

  return (
    <div className="carousel-container relative py-10 bg-gradient-to-b max-w-6xl mx-auto">
      {/* Botão Esquerda */}
      <button
        onClick={goToPrevSlide}
        className="absolute -left-5 desktop1:-left-8 top-1/2 -translate-y-1/2 text-white text-[30px] z-10 transition"
      >
        <LeftOutlined />
      </button>

      {/* Botão Direita */}
      <button
        onClick={goToNextSlide}
        className="absolute -right-5 desktop1:-right-8 top-1/2 -translate-y-1/2 text-white text-[30px] z-10 transition"
      >
        <RightOutlined />
      </button>

      {/* Carrossel */}
      <Carousel
        ref={carouselRef}
        dots={true}
        {...currentSettings()}
        responsive={responsiveOptions}
        beforeChange={handleBeforeChange}
        autoplay={false}
        className="mb-[60px] custom-carousel-dots"
      >
        {depoimentos.map((item, index) => (
          <div key={index} className="px-4 flex justify-center items-center">
            <div className="bg-white m-auto p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 max-w-md flex flex-col">
              <h3 className="text-lg font-bold text-gray-900">{item.autor}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.msg}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <style>
        {`
    /* Empurra os dots mais para baixo */
    .custom-carousel-dots .slick-dots {
      bottom: -35px !important;
    }

    /* Ajusta a cor e formato dos dots */
    .custom-carousel-dots .slick-dots li button {
      background: #fff !important; /* amarelo */
      width: 20px;
      height: 10px;
    }

    /* Cor do dot ativo */
    .custom-carousel-dots .slick-dots li.slick-active button {
      background: #ca8a04 !important; /* amarelo mais escuro */
    }
  `}
      </style>

      {/* Barra de progresso */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CarouselHero;
