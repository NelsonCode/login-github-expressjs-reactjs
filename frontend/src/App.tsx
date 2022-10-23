import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            const popup = window.open(
              "http://localhost:3000/auth/github",
              "targetWindow",
              `toolbar=no,
          location=no,
          status=no,
          menubar=no,
          scrollbars=yes,
          resizable=yes,
          width=620,
          height=700`
            );

            window.addEventListener("message", (event) => {
              if (event.origin === "http://localhost:3000") {
                if (event.data) {
                  localStorage.setItem("user", JSON.stringify(event.data));

                  popup?.close();
                }
              }
            });
          }}
        >
          LOGIN WITH GITHUB
        </button>
      </div>
    </div>
  );
}

export default App;
