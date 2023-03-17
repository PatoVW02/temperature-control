import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  const [temperatureColor, setTemperatureColor] = useState("");
  const [temperatureValue, setTemperatureValue] = useState(0);

  // 2) Agregar las funciones para manejar los eventos de Click a los botones para que
  //     cuando se presionen se incremente o decremente el valor de la temperatura.
  const onClickUpButton = () => {
    setTemperatureValue(temperatureValue + 1);
  };

  const onClickDownButton = () => {
    setTemperatureValue(temperatureValue - 1);
  };

  // 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
  //    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  useEffect(() => {
    if (temperatureValue >= 20) {
      setTemperatureColor("hot");
    } else {
      setTemperatureColor("cold");
    }
  }, [temperatureValue]);

  // Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
  // De igual manera al llegar los valores a 0 no se podrá decrementas más.
  useEffect(() => {
    if (temperatureValue >= 30) {
      setTemperatureValue(30);
    }

    if (temperatureValue <= 0) {
      setTemperatureValue(0);
    }
  }, [temperatureValue]);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={onClickUpButton}>+</button>
        <button onClick={onClickDownButton}>-</button>
      </div>
    </div>
  );
}

export default App;
