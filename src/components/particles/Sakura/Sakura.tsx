"use client";
import { FC } from "react";
import { useEffect, useState } from "react";
import "./Sakura.css";

const Sakura: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="sakura-container">
      <div className="sakura">
        {[...Array(50)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
};

export default Sakura;
