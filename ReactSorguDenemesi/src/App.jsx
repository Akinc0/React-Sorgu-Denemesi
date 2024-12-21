import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend'e POST isteği gönder
      const response = await axios.post("http://localhost:5000/api/sorgu", {
        input: inputValue,
      });

      // Gelen yanıtı state'e kaydet
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      setResponseMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>poliçe id sorgula</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bir metin girin"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          Gönder
        </button>
      </form>
      {responseMessage && (
        <p style={{ marginTop: "20px", color: "green" }}>{responseMessage}</p>
      )}
    </div>
  );
}

export default App;
