import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [search, setSearch] = useState("queretaro");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  // Obtenemos los valores de la API
  const obtenerDatos = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (data.cod >= 400) {
        setValues(false);
      } else {
        setIcon(data.weather[0].main);
        setValues(data);
      }
    } catch (error) {
      console.log(`Error al realizar la solicitud ${error}`);
    }
  };

  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      setSearch(evt.target.value);
    }
  };

  useEffect(() => {
    if (search) {
      obtenerDatos();
    }
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container">
        <h1>React Clima App</h1>
        <div className="row">
          <input 
            onKeyDown={handleSearch} 
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            autoFocus 
            placeholder="Nombre de la ciudad"
          />
        </div>
      </div>

      {/* Usamos el componente Card y le pasamos los valores y el icono como props */}
      <Card values={values} icon={icon} />
    </>
  );
}

export default App;
