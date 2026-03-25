import React from "react";

function Page() {
  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  };

  const card = {
    width: "350px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const header = {
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const chatBody = {
    flex: 1,
    padding: "15px",
    backgroundColor: "#f3f4f6",
    overflowY: "auto",
  };

  const botMessage = {
    backgroundColor: "#e5e7eb",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    width: "80%",
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  };

  const button = {
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #3b82f6",
    backgroundColor: "white",
    color: "#3b82f6",
    cursor: "pointer",
  };

  const inputBox = {
    padding: "10px",
    borderTop: "1px solid #ddd",
  };

  const input = {
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
  };

  return (
    <div style={container}>
      <div style={card}>
        {/* Header */}
        <div style={header}>ChatBot</div>

        {/* Chat Body */}
        <div style={chatBody}>
          <div style={botMessage}>
            Hello there! 👋 It's nice to meet you!
          </div>

          <div style={botMessage}>
            What brings you here today? Please use the options below 👇
          </div>

          <div style={buttonContainer}>
            <button style={button}>Build AI chatbot</button>
            <button style={button}>Using ChatBot</button>
            <button style={button}>I have questions</button>
            <button style={button}>Just browsing</button>
          </div>
        </div>

        {/* Input */}
        <div style={inputBox}>
          <input
            style={input}
            type="text"
            placeholder="Type your message here..."
          />
        </div>
      </div>
    </div>
  );
}

export default Page;