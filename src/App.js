import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "70px",
        width: "100%",
      }}
    >
      <div style={{ height: "550px", width: "60%", position: "relative" }}>
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
            fontSize: "22px",
            padding: "20px",
          }}
        >
          Un partenariat de grand prestige avec un contrat colossal pour la
          ligue nationale de Basketball
        </div>
      </div>

      <div style={{ width: "40%" }}>
        <div
          style={{
            height: "275px",
            position: "relative",
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
              fontSize: "22px",
              padding: "20px",
            }}
          >
            Incroyable, les Gazelles remporte la coupe VIVA Champions
          </div>
        </div>
        <div style={{ height: "275px", width: "100%", position: "relative" }}>
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
              fontSize: "22px",
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
