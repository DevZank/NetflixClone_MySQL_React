import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./MovieList.css";
import Image1 from "../assets/Catalogo/ImageCOBRAKAI.png";
import Image2 from "../assets/Catalogo/ImageSTRANGERTHINGS.png";
import Image3 from "../assets/Catalogo/ImageARCANE.png";
import Image4 from "../assets/Catalogo/ImageRESGATE2.png";
import Image5 from "../assets/Catalogo/ImagePICAPAU.png";
import Play from "../assets/Catalogo/Play.png";

// Backgrounds
import BgPadrao from "../assets/Catalogo/BackgroundPadrao.png";
import Bg1 from "../assets/Catalogo/BgCobraKai.png";
import Bg2 from "../assets/Catalogo/BgResgate2.png";
import Bg3 from "../assets/Catalogo/BgPicaPau.png";
import Bg4 from "../assets/Catalogo/BgStrangerThings.jpg";
import Bg5 from "../assets/Catalogo/BgArcane.png";

// Logos
import Logo1 from "../assets/Catalogo/LogoCobraKai.png";
import Logo2 from "../assets/Catalogo/LogoResgate2.png";
import Logo3 from "../assets/Catalogo/LogoPicaPau.png";
import Logo4 from "../assets/Catalogo/LogoStrangerThings.png";
import Logo5 from "../assets/Catalogo/LogoArcane.png";

//  Imagens Catalogo
import Logo from "../assets/Catalogo/Logo.png";
import Arrow from "../assets/Catalogo/Arrow.png";
import User from "../assets/Catalogo/User.png";

// Faixa Etaria
import A16 from "../assets/Catalogo/A16.png";
import A14 from "../assets/Catalogo/A14.png";
import AL from "../assets/Catalogo/AL.png";

// Audios
import Audio1 from "../assets/Catalogo/AudioCobraKai.mp3";
import Audio2 from "../assets/Catalogo/AudioResgate2.mp3";
import Audio3 from "../assets/Catalogo/AudioStrangerThings.mp3";
import Audio4 from "../assets/Catalogo/AudioPicaPau.mp3";
import Audio5 from "../assets/Catalogo/AudioArcane.mp3";

// Tipo
import Serie from "../assets/Catalogo/Serie.png";
import Filme from "../assets/Catalogo/Filme.png";

const MovieList = (props) => {
  const audio1 = useRef(null);
  const audio2 = useRef(null);
  const audio3 = useRef(null);
  const audio4 = useRef(null);
  const audio5 = useRef(null);

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [movies, setMovies] = useState([]);
  const [background, setBackground] = useState(BgPadrao);
  const [informacoes, setInformacoes] = useState("Hide");
  const [etaria, setEtaria] = useState(AL);
  const [logo, setLogo] = useState();
  const [tipo, setTipo] = useState();
  const [duracao, setDuracao] = useState();
  const [data, setData] = useState();
  const [genero, setGenero] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const playAudio1 = () => {
    audio1.current.currentTime = 0;
    audio1.current.play();
  };

  const playAudio2 = () => {
    audio2.current.currentTime = 0;
    audio2.current.play();
  };

  const playAudio3 = () => {
    audio3.current.currentTime = 0;
    audio3.current.play();
  };

  const playAudio4 = () => {
    audio4.current.currentTime = 0;
    audio4.current.play();
  };

  const playAudio5 = () => {
    audio5.current.currentTime = 0;
    audio5.current.play();
  };

  const pauseAudio = () => {
    audio1.current.pause();
    audio2.current.pause();
    audio3.current.pause();
    audio4.current.pause();
    audio5.current.pause();
  };

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className={props.netflixContainer}>
      <img className="Background" src={background} alt="" />
      <header>
        <img src={Logo} alt="Logo Netflix" />
        <div>
          <img src={User} alt="User Icon" />
          <button>
            <img src={Arrow} alt="Arrow Icon" />
          </button>
        </div>
      </header>
      <motion.div className={informacoes}>
        <motion.img className="MovieType" src={tipo} alt="Tipo" />
        <motion.img className="MovieLogo" src={logo} alt="Logo" />
        <div className="Buttons">
          <motion.div className="PlayButton">
            <img src={Play} alt="Play Icon" />
            <p>
              Assistir -&nbsp;<span>{duracao}</span>
            </p>
          </motion.div>
          <motion.div className="DateButton">
            <p>
              Visto por Ultimo -&nbsp;<span>{data}</span>
            </p>
          </motion.div>
          <motion.div className="GenderButton">
            <span>{genero}</span>
          </motion.div>
        </div>

        <div className="FaixaEtaria">
          <img src={etaria} alt="Faixa etaria" />
        </div>
      </motion.div>
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -800 }}
        >
          {movies.map((movie) => {
            let image;

            if (movie.id === 1) {
              image = Image1;
            } else if (movie.id === 2) {
              image = Image2;
            } else if (movie.id === 3) {
              image = Image3;
            } else if (movie.id === 4) {
              image = Image4;
            } else if (movie.id === 5) {
              image = Image5;
            }

            return (
              <motion.button
                className="item"
                key={movie.id}
                onHoverStart={() => {
                  setInformacoes("MovieInfo");
                  if (movie.id === 1) {
                    setBackground(Bg1);
                    setLogo(Logo1);
                    pauseAudio();
                    playAudio1();
                  } else if (movie.id === 2) {
                    setBackground(Bg4);
                    setLogo(Logo4);
                    pauseAudio();
                    playAudio3();
                  } else if (movie.id === 3) {
                    setBackground(Bg5);
                    setLogo(Logo5);
                    pauseAudio();
                    playAudio5();
                  } else if (movie.id === 4) {
                    setBackground(Bg2);
                    setLogo(Logo2);
                    pauseAudio();
                    playAudio2();
                  } else if (movie.id === 5) {
                    setBackground(Bg3);
                    setLogo(Logo3);
                    pauseAudio();
                    playAudio4();
                  }

                  if (movie.etaria === 16) {
                    setEtaria(A16);
                  } else if (movie.etaria === 14) {
                    setEtaria(A14);
                  } else if (movie.etaria === 0) {
                    setEtaria(AL);
                  }

                  if (movie.type === 0) {
                    setTipo(Serie);
                    setDuracao("Temporada " + movie.atual_temp);
                  } else {
                    setTipo(Filme);
                    setDuracao(movie.duration);
                  }

                  setData(movie.last_view.split("T", 1));
                  setGenero(movie.gender);
                }}
              >
                <img src={image} alt="Movie Thumbnail" />
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      <audio ref={audio1}>
        <source src={Audio1} type="audio/mp3" />
      </audio>
      <audio ref={audio2}>
        <source src={Audio2} type="audio/mp3" />
      </audio>
      <audio ref={audio3}>
        <source src={Audio3} type="audio/mp3" />
      </audio>
      <audio ref={audio4}>
        <source src={Audio4} type="audio/mp3" />
      </audio>
      <audio ref={audio5}>
        <source src={Audio5} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default MovieList;
