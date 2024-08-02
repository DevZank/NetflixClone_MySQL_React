import React, { useState, useRef, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
//  Imagens Profile
import User1 from "./assets/Profiles/User1.png";
import ISAAC from "./assets/Profiles/Isaac.png";
import Add from "./assets/Profiles/Add.png";
import Lock from "./assets/Profiles/Lock.png";
//

// Video de Open
import NetflixOpen from "./assets/NetflixOpening.mp4";
//

const App = () => {
  const [profileContainer, setProfileContainer] = useState("ProfileContainer");
  const [netflixOpenContainer, setNetflixOpenContainer] = useState("Hide");
  const [moviesPage, setMoviesPage] = useState("Hide");
  const [netflixContainer, setNetflixContainer] = useState("Hide");

  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Autoplay falhou:", error);
      });
    }
  };

  const handlePauseVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setNetflixOpenContainer("Hide");
    }
  };

  useEffect(() => {
    // Tentativa de reproduzir o vídeo automaticamente
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Caso a reprodução automática falhe, adicionar um botão para iniciar a reprodução
        video.setAttribute("controls", "controls");
      });
    }
  }, []);

  return (
    <main className="MainNetflix">
      <div className={profileContainer}>
        <div className="ProfilesDiv">
          <h1 className="ProfilesTitle">Quem está Assistindo?</h1>
          <div className="Profiles">
            <div className="Profile User1">
              <button
                onClick={() => {
                  setProfileContainer("Hide");
                  setNetflixOpenContainer("NotHide");
                  handlePlayVideo();
                  setTimeout(() => {
                    handlePauseVideo();
                    setNetflixContainer("NetflixContainer");
                    setMoviesPage("NotHide");
                  }, 4000);
                }}
              >
                <img src={User1} alt="User1 Profile" />
              </button>
              <h2>User1</h2>
            </div>
            <div className="Profile">
              <img src={ISAAC} alt="ISAAC Profile" />
              <h2>ISAAC</h2>
              <img src={Lock} alt="Lock Icon" />
            </div>
            <div className="Profile Add">
              <img src={Add} alt="Add Icon" />
              <h2>Adicionar perfil</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={netflixOpenContainer} style={{ zIndex: 100 }}>
        <video width="100%" ref={videoRef} loop>
          <source src={NetflixOpen} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      {/*  PAGINA FILMES */}
      <div className={moviesPage}>
        <MovieList netflixContainer={netflixContainer} />
      </div>
    </main>
  );
};

export default App;
