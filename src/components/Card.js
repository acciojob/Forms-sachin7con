import React from "react";

function Card({ children }) {
    const style = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px auto",
        maxWidth: "400px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }

    return <div style={style}> {children} </div>



}

export default Card;