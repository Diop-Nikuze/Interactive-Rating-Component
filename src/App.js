import "./App.css";

function App() {
  return (
    <div
      className="container-posts"
      style={{
        marginTop: "70px",
        width: "100%",
        display: "flex",
      }}
    >
      <div
        className="firstPost"
        style={{ height: "552px", width: "60%", position: "relative" }}
      >
        <img
          src="./images/imagesix.jpg"
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            color: "white",
            fontSize: "20px",
            padding: "20px",
          }}
        >
          Un partenariat de grand prestige avec un contrat colossal pour la
          ligue nationale de Basketball
        </div>
      </div>

      <div className="container-secondThirdPost" style={{ width: "40%" }}>
        <div
          className="secondPost"
          style={{
            height: "275px",
            position: "relative",
            margin: "1px 0 0 1px",
          }}
        >
          <img
            src="./images/imagecinq.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              color: "white",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            Incroyable, les Gazelles remportent la coupe VIVA Champions
          </div>
        </div>
        <div
          className="thirdPost"
          style={{
            height: "275px",
            position: "relative",
            margin: "1px 0 0 1px",
          }}
        >
          <img
            src="./images/imagequatres.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              color: "white",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            FEBABU en collaboration avec Brarudi organisent Shoota na Viva
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
