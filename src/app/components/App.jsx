import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [columns, setColumns] = useState([
    { Headers: "firstname", accessor: "firstname" },
    { Headers: "lastname", accessor: "lastname" },
    { Headers: "email", accessor: "email" },
  ]);

  const [anime, setAnime] = useState(false);

  const [person, setPerson] = useState([
    { firstname: "keth", lastname: "andrian", email: "kethandrian@gmail.com" },
    { firstname: "Emily", lastname: "lucas", email: "emilylucas@gmail.com" },
    { firstname: "kevin", lastname: "richards", email: "richards@gmail.com" },
  ]);

  const swapFirstCol = () => {
    const newCols = [...columns];

    [newCols[0], newCols[1], newCols[2]] = [newCols[1], newCols[0], newCols[2]];

    setColumns(newCols);

    setAnime((x) => !x);
  };

  const swapLastCol = () => {
    const newCols = [...columns];

    [newCols[0], newCols[1], newCols[2]] = [newCols[0], newCols[2], newCols[1]];

    setColumns(newCols);

    setAnime((x) => !x);
  };

  return (
    <div className="container">
      <div className="wrapper">

      <h1>A Simple Table</h1>
      <div className="buttonContainer">
        <button onClick={swapFirstCol}>Swap First Columns</button>
        <button onClick={swapLastCol}>Swap First Columns</button>
      </div>

      <table>
        <thead>
          <motion.tr>
            {columns.map((item) => (
              <motion.th>
                <motion.div
                  className=""
                  layoutTransition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  {item.Headers}
                </motion.div>
              </motion.th>
            ))}
          </motion.tr>
        </thead>
        <tbody>
          {person.map((person, personIndex) => (
            <tr key={personIndex}>
              {columns.map((cols, colIndex) => (
                <td key={colIndex}>
                  <motion.div
                    className=""
                    layoutTransition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                  >
                    {person[cols.accessor]}
                  </motion.div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;

