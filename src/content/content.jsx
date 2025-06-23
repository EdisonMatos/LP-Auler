import logo from "../assets/imgs/logo/logo.png";
import heroImgPhone from "../assets/imgs/hero/personImg.png";
import heroImgDesktop from "../assets/imgs/hero/bgHeroInfluencer.jpg";
import bgHeroImg from "../assets/imgs/hero/bgHeroInfluencer.jpg";
import heroDefaultImg from "../assets/imgs/hero/lawHero.webp";
import backgroundPersonMobile from "../assets/imgs/hero/bgHeroMobile.jpg";

import imgFeatures from "../assets/imgs/features/imgServices.webp";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";
import frigorifico from "../assets/imgs/features/frigorifico.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.webp";
import imgAbout1 from "../assets/imgs/about/aboutImg1.jpg";
import imgAbout2 from "../assets/imgs/about/aboutImg2.jpg";
import imgAbout3 from "../assets/imgs/about/aboutImg3.jpg";
import imgAbout4 from "../assets/imgs/about/aboutImg4.jpg";
import imgAbout5 from "../assets/imgs/about/aboutImg5.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";
import aboutInstagram from "../assets/imgs/about/imgAboutInstagram.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.jpg";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.jpg";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.jpg";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.jpg";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.jpg";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.jpg";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.jpg";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";
import { ChartNoAxesCombined } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";

import { Briefcase, Gavel } from "lucide-react";
import { Users } from "lucide-react";
import { FileText } from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Auler Advocacia",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "A_Definir", // Email desejado pelo cliente
  domain: "auleradvocacia.com.br", // Sem "www"
  phone: {
    ddd: "49",
    firstPart: "99997", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "6503", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>Rua Minas Gerais, nº 533 E</p>
      <p>Presidente Médici Chapecó - SC,</p>
      <p>CEP: 89801-200</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda a Sexta-feira</p>
      <p>8h30 às 12h</p>
      <p>13h30 às 18h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "A_definir", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ESCRITÓRIO DE ADVOCACIA EM CHAPECÓ - SC",
      title: (
        <h1 className="mb-[16px]">
          Se o seu trabalho tem cobrado da sua saúde mais
          <span className="text-primary"> do que deveria</span>
        </h1>
      ),
      subtitle:
        "Talvez seja hora de entender o que a lei tem a dizer sobre isso",
      heroImgPhone: heroImgPhone, // img da pessoa mobile
      heroDesktop: heroImgDesktop, //bg com foto da pessoa
      heroImg: bgHeroImg, //fundo da Hero
      heroDefaultImage: heroDefaultImg, //imagem da heroDefault Mobile
      backgroundPerson: backgroundPersonMobile,
      ctaButtonText: "Saiba seus direitos",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "Atendimento presencial com hora marcada em Chapecó, Xaxim, Quilombo, Seara e Concórdia - ou a qualquer dia via WhatsApp",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    whyUsCta: {
      sectionHeader: {
        miniTag: "ENTENDA SUA SITUAÇÃO",
        title: "Seu trabalho não precisa ser uma luta diária contra o perigo",
        subtitle:
          "Você acorda cedo, enfrenta longas jornadas e dá seu suor para sustentar sua família. Mas, no chão de fábrica ou na agroindústria, o risco nunca sai de turno: máquinas perigosas, EPIs vencidos, calor sufocante, frio intenso, produtos químicos e ambientes insalubres fazem parte da sua rotina.",
      },
      description: (
        <p>
          Você já parou para pensar:
          <br />
          👉 "Até quando meu corpo vai aguentar isso?"
          <br />
          👉 "Será que minha saúde vale menos que a produção?"
          <br />
          👉 "Se eu me acidentar, quem vai me ajudar?"
          <br />
          <br />A verdade é que a <strong>lei protege você </strong>– e você não
          precisa enfrentar isso sozinho. Se a sua empresa ignora seus direitos
          ou coloca sua segurança em risco,{" "}
          <strong>há algo que você pode fazer.</strong>
          <br />
          <br />
          <strong>
            avegue pelo site, descubra como a justiça trabalhista pode te
            proteger e tire suas dúvidas agora mesmo.
          </strong>
          N Seu direito à saúde, segurança e dignidade no trabalho{" "}
          <strong>não é negociável.</strong>
        </p>
      ),
      ctaButtonText: "Clique aqui e fale conosco hoje mesmo",
    },
    frigorifico: {
      sectionHeader: {
        miniTag: "EMPREGADO FRIGORÍFICO",
        title:
          "⚖️ Você trabalha em frigorífico e tem dúvidas sobre seus direitos trabalhistas?",
        subtitle:
          "Informações jurídicas  para quem atua em ambientes industriais como abatedouros e frigoríficos.",
      },
      img: frigorifico,
      description: (
        <p>
          Se você atua nesse setor, sabe que a rotina pode ser fisicamente
          exaustiva e cheia de riscos. Muitas vezes, situações do dia a dia
          podem caracterizar irregularidades trabalhistas.
          <br />
          <br />
          Confira abaixo 10 situações que merecem atenção jurídica
          especializada:
        </p>
      ),
      labelModal: "Acesse aqui",
      modal: (
        <p>
          1️ <strong>- Condições insalubres ou perigosas</strong>
          <br />
          Ambientes frios, ruídos ou contato com agentes biológicos podem gerar
          o direito a adicionais salariais.
          <br />
          <br />
          2️ <strong>- Jornada excessiva ou sem pausas</strong>
          <br />
          Há limites legais de jornada e a necessidade de pausas regulares,
          especialmente em atividades repetitivas. A FALTA DAS PAUSAS PODE GERAR
          HORA EXTRA.
          <br />
          <br />
          3️{" "}
          <strong>- Intervalo para descanso não concedido corretamente</strong>
          <br />O intervalo mínimo deve ser respeitado. Se não for, pode haver
          reflexos no pagamento das horas.
          <br />
          <br />
          4️ <strong>- Acidentes ou doenças ocupacionais</strong>
          <br />
          Dores musculares ou acidentes com equipamentos são comuns. O
          acompanhamento jurídico pode orientar sobre os direitos
          previdenciários e indenizatórios.
          <br />
          <br />
          5️ <strong>- Acúmulo ou desvio de função</strong>
          <br />
          Quando o trabalhador realiza tarefas além da função contratada, pode
          haver repercussões salariais.
          <br />
          <br />
          6️ <strong>- Terceirização de atividades principais</strong>
          <br />
          Situações em que a terceirização não é permitida podem ensejar
          questionamentos jurídicos.
          <br />
          <br />
          7️ <strong>- Assédio moral no ambiente de trabalho</strong>
          <br />
          O respeito à dignidade do trabalhador é um direito garantido por lei.
          <br />
          <br />
          8️ <strong>- Verbas rescisórias não pagas corretamente</strong>
          <br />
          Ao encerrar o vínculo, o trabalhador deve receber todos os valores
          devidos, conforme a legislação.
          <br />
          <br />
          9️ <strong>- Contratações irregulares (PJ, cooperativas etc.)</strong>
          <br />A subordinação e habitualidade podem configurar vínculo
          empregatício mesmo com contratos alternativos.
          <br />
          <br />
          10 <strong>- Diferença salarial sem justificativa</strong>
          <br />
          Trabalhadores que exercem as mesmas funções devem receber salários
          compatíveis.
        </p>
      ),
    },
    featuresLerDort: {
      miniTag: "LER - DORT",
      title: (
        <p>
          ⚖️ Você sente dores constantes no trabalho? <br />
          Talvez seu corpo esteja pedindo ajuda — e a lei está do seu lado
        </p>
      ),
      subtitle:
        "Você já percebeu como, com o passar do tempo, aquelas pequenas dores nos braços, nas costas ou nos ombros vão ficando cada vez mais frequentes?",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      descriptionTexte: (
        <p>
          No começo, parece só cansaço. Mas, quando o incômodo se torna parte da
          rotina, é sinal de que algo está errado.
          <br />
          <br /> Se você trabalha repetindo os mesmos movimentos todos os dias —
          cortando, empacotando, digitando ou carregando peso — seu corpo pode
          estar sofrendo com algo chamado LER (Lesões por Esforço Repetitivo) ou
          DORT (Distúrbios Osteomusculares Relacionados ao Trabalho).
        </p>
      ),
      card1: {
        img: featuresImg1,
        title: (
          <p>
            Esses nomes podem parecer técnicos demais. Mas, na prática,
            significam o que muita gente sente sem entender direito:
          </p>
        ),
        subtitle: "Defesa dos seus direitos em casos de acidente laboral.",
        description: (
          <div>
            ❗ Dores constantes nos punhos, ombros e coluna.
            <br />
            <br />❗ Dormência nas mãos e dedos.
            <br />
            <br />❗ Cansaço muscular mesmo sem esforço pesado.
            <br />
            <br />❗ Dificuldade para movimentar os braços após o trabalho.
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ambulance-icon lucide-ambulance"
          >
            <path d="M10 10H6" />
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
            <path d="M8 8v4" />
            <path d="M9 18h6" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "🧠 Você não está sozinho — e isso não é normal.",
        subtitle: "Garantia dos adicionais por riscos e condições nocivas.",
        description: (
          <div>
            Muitos trabalhadores acham que sentir dor faz parte do trabalho
            duro. Que é “coisa da idade” ou “só mais um dia puxado”.
            <br />
            Mas a verdade é que{" "}
            <strong>
              ninguém deveria sentir dor crônica por fazer o seu trabalho.
            </strong>
            <br />
            <br />
            Essas lesões não aparecem de uma hora para outra — elas se acumulam
            silenciosamente. E quando percebemos, já afetam o sono, o humor e
            até mesmo a nossa dignidade.
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-biohazard-icon lucide-biohazard"
          >
            <circle cx="12" cy="11.9" r="2" />
            <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
            <path d="m8.9 10.1 1.4.8" />
            <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
            <path d="m15.1 10.1-1.4.8" />
            <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
            <path d="M12 13.9v1.6" />
            <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
            <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
            <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title:
          "📌 A lei reconhece o impacto das LER/DORT na vida do trabalhador.",
        subtitle: "Auxílio na rescisão por falta grave do empregador.",
        description: (
          <div>
            A legislação trabalhista prevê medidas para proteger a sua saúde.
            Isso inclui:
            <br />
            Pausas obrigatórias durante a jornada;
            <br />
            Ambiente ergonômico e seguro;
            <br />
            Acompanhamento médico;
            <br />
            E, em casos mais graves, indenizações, afastamento e reabilitação.
            <br />
            Mas atenção: se você não buscar orientação, ninguém vai fazer isso
            por você.
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-x-icon lucide-user-x"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="17" x2="22" y1="8" y2="13" />
            <line x1="22" x2="17" y1="8" y2="13" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "🤝 Como um advogado pode te ajudar?",
        subtitle: "Cobrança justa por horas trabalhadas além do horário.",
        description: (
          <div>
            A função de um advogado trabalhista não é incentivar ações
            desnecessárias. É esclarecer, orientar e proteger seus direitos com
            responsabilidade. Cada caso é único, e só com uma análise jurídica
            adequada é possível entender o que você pode ou não requerer
            legalmente.
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-timer-icon lucide-timer"
          >
            <line x1="10" x2="14" y1="2" y2="2" />
            <line x1="12" x2="15" y1="14" y2="11" />
            <circle cx="12" cy="14" r="8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg4,
        title:
          "✉️ Se você sente que seu corpo está dando sinais de que algo não vai bem no seu trabalho, talvez seja hora de ouvir com mais atenção.",
        subtitle:
          "A dor pode estar te mostrando o que você ainda não teve coragem de reconhecer:",
        description: (
          <div>
            🔹 Seu esforço merece respeito.
            <br />
            🔹 Sua saúde merece cuidado.
            <br />
            🔹 E seus direitos, proteção.
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    avoidAcidents: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "ACIDENTE DE TRABALHO",
      title: (
        <p>
          Se você sofreu um acidente no trabalho, a lei está do seu lado. <br />{" "}
          Desde cortes e quedas até exposição a produtos químicos, você tem
          direito a:
        </p>
      ),
      subtitle: "",
      description: (
        <p>
          ✔ Atendimento médico imediato (pago pela empresa)
          <br />
          <br />✔ Afastamento remunerado (auxílio-doença pelo INSS, se
          necessário)
          <br />
          <br />✔ Estabilidade de 12 meses após retorno (não pode ser demitido
          sem justa causa)
          <br />
          <br />✔ Indenização em casos de negligência da empresa (como EPI
          vencido ou falta de treinamento)
        </p>
      ),
      labelModal: "O QUE FAZER AGORA?",
      descriptionModal: (
        <p>
          1️⃣ Registre o acidente na empresa (CAT – Comunicação de Acidente de
          Trabalho é obrigatória!)
          <br />
          2️⃣ Procure um médico e guarde todos os documentos (atestados, recibos,
          fotos do local)
          <br />
          3️⃣ Não assine nada sem orientação – a pressão para "abafar o caso" é
          comum, mas ilegal.
          <br />
          <br />
          Se sua empresa se recusar a ajudar ou você sentir que seus direitos
          foram violados, fale conosco hoje mesmo. A justiça pode garantir sua
          segurança e sua dignidade.
        </p>
      ),
      labelWhatsappModal: "Clique aqui para conversar com um especialista",
    },
    features: {
      miniTag: "ESPECIALIDADE",
      title: "Foco em Direito do Trabalho",
      subtitle:
        "Atuação focada nas principais demandas trabalhistas com clareza e eficiência",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Acidente e Doença do Trabalho",
        subtitle: "Defesa dos seus direitos em casos de acidente laboral.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ambulance-icon lucide-ambulance"
          >
            <path d="M10 10H6" />
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
            <path d="M8 8v4" />
            <path d="M9 18h6" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Adicionais de Insalubridade e Periculosidade",
        subtitle: "Garantia dos adicionais por riscos e condições nocivas.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-biohazard-icon lucide-biohazard"
          >
            <circle cx="12" cy="11.9" r="2" />
            <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
            <path d="m8.9 10.1 1.4.8" />
            <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
            <path d="m15.1 10.1-1.4.8" />
            <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
            <path d="M12 13.9v1.6" />
            <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
            <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
            <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title: "Rescisão Indireta",
        subtitle: "Auxílio na rescisão por falta grave do empregador.",
        description: (
          <div>
            A_Definir <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-x-icon lucide-user-x"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="17" x2="22" y1="8" y2="13" />
            <line x1="22" x2="17" y1="8" y2="13" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Horas Extras e Jornada de Trabalho",
        subtitle: "Cobrança justa por horas trabalhadas além do horário.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-timer-icon lucide-timer"
          >
            <line x1="10" x2="14" y1="2" y2="2" />
            <line x1="12" x2="15" y1="14" y2="11" />
            <circle cx="12" cy="14" r="8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg4,
        title: "A_Definir",
        subtitle: "A_Definir",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    maps: {
      minitag: "LOCALIZAÇÃO",
      title: "Encontre-nos em Chapecó - SC",
      subtitle:
        "Visite nosso endereço e confira no mapa abaixo como chegar facilmente.",
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14207.590223989728!2d-52.6116439!3d-27.0965259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d96d26f269%3A0xfdcf4834fdab1e5!2sChapec%C3%B3%20Multas!5e0!3m2!1spt-BR!2sbr!4v1750168671846!5m2!1spt-BR!2sbr",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "QUEM É A AULER ADVOCACIA",
      title: "Nossa trajetória",
      subtitle: "Atendimento direto, claro e focado na solução do seu problema",
      labelInstagram: "Siga-nos no Instagram",
      labelFacebook: "Siga-nos no Facebook",
      labelLinkedin: "Siga-nos no LinkedIn",
      labelX: "Siga-nos no X",
      paragraph: (
        <div>
          Na Auler Advocacia, cada cliente é atendido com atenção individual e
          orientação clara.
          <br />
          Aqui, acreditamos que um trabalhador bem orientado sabe o que fazer —
          e é isso que oferecemos: direcionamento jurídico objetivo, sem
          complicações.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Na Auler Advocacia, cada cliente é atendido com atenção individual e
          orientação clara.
          <br />
          <br />
          Aqui, acreditamos que um trabalhador bem orientado sabe o que fazer —
          e é isso que oferecemos: direcionamento jurídico objetivo, sem
          complicações.
          <br />
          <br />
          Atuamos com foco na realidade de cada caso, especialmente em questões
          trabalhistas, buscando sempre a solução mais justa dentro do que prevê
          o direito.
          <br />
          <br />
          Nossa comunicação é acessível, direta e sem juridiquês, porque
          entendemos que o mais importante é você saber exatamente onde está
          pisando.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          imgSocial: aboutInstagram,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "A_Definir",
        title: "A_Definir",
        subtitle: "A_Definir",
        paragraph: <p>A_Definir</p>,
        labelInstagram: "Siga-nos no Instagram",
        labelFacebook: "Siga-nos no Facebook",
        labelLinkedin: "Siga-nos no LinkedIn",
        labelX: "Siga-nos no X",
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title:
        "Enfrentando um problema jurídico? Deixe que cuidamos disso para você!",
      subtitle:
        "Converse com nossa equipe. Estamos prontos para oferecer a orientação jurídica de que você precisa.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Realizamos uma reunião para entender seu caso e identificar suas necessidades jurídicas.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais ou o serviço contratado, buscando justiça e soluções personalizadas conforme a necessidade do seu caso.",
        },
      },
    },
    blog: {
      miniTag: "BLOG",
      title: "A_Definir",
      subtitle: "",
      img: imgSteps,
      blogApiEndpoint:
        "https://public-api.wordpress.com/rest/v1.1/sites/blogtestepaper.wordpress.com/posts/",
      labelCards: "Ver mais",
      label: "Clique aqui para ver todas as matérias",
      blogLink: "https://blogtestepaper.wordpress.com/",
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Sofri um acidente de trabalho. O que devo fazer?",
          answer: (
            <p>
              Exemplo: João cortou a mão em uma máquina sem proteção na fábrica.
              A empresa tentou não registrar o acidente. ✅ Seus direitos: A
              empresa DEVE emitir a CAT (Comunicação de Acidente de Trabalho),
              pagar seus tratamentos e, se necessário, garantir afastamento com
              estabilidade.
            </p>
          ),
        },
        question2: {
          question:
            "Trabalho em um local com muito barulho. Posso receber adicional por isso?",
          answer: (
            <p>
              Exemplo: Maria trabalha em um frigorífico com máquinas tão altas
              que já tem zumbido no ouvido. ✅ Seus direitos: Se o ruído
              ultrapassar 85 decibéis, você tem direito ao adicional de
              insalubridade (até 40% do salário mínimo).
            </p>
          ),
        },
        question3: {
          question:
            "Minha empresa não fornece EPI ou dá equipamento vencido. O que fazer?",
          answer: (
            <p>
              Exemplo: Carlos recebeu uma máscara contra produtos químicos, mas
              estava rasgada e vencida. ✅ Seus direitos: EPI é obrigatório e
              deve estar em perfeito estado. Recuse trabalhar sem ele e exija
              substituição. Pode gerar indenização se houver danos.
            </p>
          ),
        },
        question4: {
          question:
            "Trabalho no frio extremo ou calor excessivo. Tenho direito a algo?",
          answer: (
            <p>
              Exemplo: Ana trabalha em um galpão sem ventilação, onde o calor
              passa de 40°C. ✅ Seus direitos: Locais com temperaturas extremas
              podem garantir adicional de insalubridade (20% a 40% do salário
              mínimo).
            </p>
          ),
        },
        question5: {
          question: "Trabalho limpando banheiros. Isso é insalubre?",
          answer: (
            <p>
              Exemplo: Maria tem que limpar banheiros industriais devo receber
              adicional de insalubridade por isso. ✅ Seus direitos: limpar
              banheiros gera insalubridade. Você pode deve receber até 40% de
              adicional de insalubridade.
            </p>
          ),
        },
        question6: {
          question:
            "Sofri assédio ou briga com colegas. A empresa pode me demitir por isso?",
          answer: (
            <p>
              Exemplo: Luís foi agredido por um colega após uma discussão, e a
              empresa o demitiu sem apurar o caso. ✅ Seus direitos: Brigas
              devem ser investigadas. Se você foi vítima, pode processar por
              danos morais e até anular a demissão se foi injusta.
            </p>
          ),
        },
        question7: {
          question:
            "Trabalho exposto a umidade (como lavanderias ou câmaras frias). Tenho direito a algo?",
          answer: (
            <p>
              Exemplo: Fernanda trabalha em um frigorífico onde o chão está
              sempre molhado e ela já caiu duas vezes. ✅ Seus direitos: Umidade
              excessiva pode dar direito a adicional de insalubridade e a
              empresa deve fornecer calçados antiderrapantes.
            </p>
          ),
        },
        question8: {
          question:
            "Minha empresa paga o adicional de insalubridade, mas acho que o valor está errado. Como conferir?",
          answer: (
            <p>
              Exemplo: Pedro recebe 10% de insalubridade por trabalhar com
              produtos químicos, mas a lei garante 20%. ✅ Seus direitos: O
              valor depende do grau de risco (10%, 20% ou 40% do salário
              mínimo). Consulte um advogado para calcular corretamente.
            </p>
          ),
        },
        question9: {
          question:
            "Fui demitido após sofrer um acidente de trabalho. Isso é permitido?",
          answer: (
            <p>
              Exemplo: Carla sofreu uma queda no trabalho, ficou afastada e foi
              demitida ao voltar. ✅ Seus direitos: Não! Você tem estabilidade
              de 12 meses após o retorno. Se foi demitido, pode entrar na
              Justiça para ser recontratado.
            </p>
          ),
        },
        question10: {
          question:
            "Minha empresa diz que 'quem não quer se arriscar, não trabalha aqui'. Isso é legal?",
          answer: (
            <p>
              Exemplo: O chefe de Marcos disse que trabalhar com máquinas
              perigosas é "normal" e quem reclamar será mandado embora. ✅ Seus
              direitos: Isso é ILEGAL! Você pode denunciar ao Ministério do
              Trabalho e processar por assédio moral.
            </p>
          ),
        },
      },
      paragraph:
        "Se você se identificou com qualquer uma dessas situações, não fique calado e descubra como garantir seus direitos.",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="black"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailSecundario: `${infos.emailSecundario}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
