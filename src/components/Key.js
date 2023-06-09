import React, { useEffect, useState } from "react";

const Key = () => {
  const [letter, setLetter] = useState("A");
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomAlphabet = () => {
    const alphabet = alphabets[Math.floor(Math.random() * 25 + 1)];
    setLetter(alphabet);
  };

  useEffect(() => {
    randomAlphabet();
  }, []);

  return (
    // <div className="key">{letter}</div>

    <div>
      <span className="key-cap">
        <i>{letter}</i>
      </span>
    </div>
  );
};

export default Key;
