import React from "react";

import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";
import Kanjis from "../data/kanji.json";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

import "./Card.css";

export default function CardContainer() {
  let [kanji, setKanji] = React.useState({});
//   let [isClicked, setIsClicked] = React.useState(false);
  let [previousKanjis, setPreviousKanjis] = React.useState([]);
  let [selectedLevel, setSelectedLevel] = React.useState(null);

  let [flipped, setIsFlipped] = React.useState({isFlipped: false});

  //Fetching kanjis by level or randomly
  const fetchKanjis = level => {
      const levelKanjis = Kanjis.filter(k => k.category === `jlptn${level}`);
      let randomIndex = Math.floor(Math.random() * levelKanjis.length) + 1;
      setKanji(Object.assign({}, levelKanjis[randomIndex]));
      setPreviousKanjis(prevState => {
        return [...prevState, kanji];
      });
      setSelectedLevel(level)
    }
  //to flip the card and show the back
  const handleClick = () => {
    setIsFlipped(!flipped);
  };

  // return to previous kanjis
  const handlePreviousClick = () => {
    if (previousKanjis.length > 1) {
      setKanji(previousKanjis[previousKanjis.length - 1]);
      previousKanjis.pop(previousKanjis.length - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card px-3 mb-3 mt-0 flex justify-center flex-col">
          <div className="flex justify-center mb-3">
            <h1 className="text-white">Niveau JLPT</h1>
          </div>
          <div className="flex justify-between">
            <button
              className="card-level-button w-2 md:w-30 hover:bg-blue-400 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(5)}
              type="button"
            >
              <p>5</p>
            </button>
            <button
              className="card-level-button w-2 md:w-30 hover:bg-blue-400 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(4)}
              type="button"
            >
              <p>4</p>
            </button>
            <button
              className="card-level-button w-2 md:w-30 hover:bg-blue-400 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(3)}
              type="button"
            >
              <p>3</p>
            </button>
            <button
              className="card-level-button w-2 md:w-30 hover:bg-blue-400 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(2)}
              type="button"
            >
              <p>2</p>
            </button>
            <button
              className="card-level-button w-2 md:w-30 hover:bg-blue-400 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(1)}
              type="button"
            >
              <p>1</p>
            </button>
          </div>
          <Tilt reset={true} perspective={1000}>
            <ReactCardFlip
              isFlipped={flipped}
              flipDirection="horizontal"
              flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2}
            >
              <CardBack back kanjiInfo={kanji} />
              <CardFront front character={kanji} />
            </ReactCardFlip>
          </Tilt>
          {/* <div className='card-button-container'>
                                    <button className="card-button w-full md:w-30 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded mt-2" onClick={() => fetchKanjis(selectedLevel)} type='button'>
                                    {
                                        isClicked ?  <p className='text-base'>Afficher un nouveau caractère</p> : <p className='text-base'>Afficher un caractère</p>
                                    }
                                    </button>
                                    {
                                       isClicked && <button className="card-button w-10 md:w-full md:w-30 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded mt-2" onClick={(e) => handleClick(e)}  type='button'>Tourner la carte</button>

                                    }
                                </div> */}
          <div className="mobile-navigation-container">
            <button
              className="card-navigation-button w-2 md:w-30 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => handlePreviousClick()}
            >
              前
            </button>
            <button
              className="card-navigation-button w-2 md:w-30 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => handleClick()}
            >
              意味
            </button>
            <button
              className="card-navigation-button w-2 md:w-30 text-white font-bold py-2 rounded mb-2 text-center"
              onClick={() => fetchKanjis(selectedLevel)}
            >
              次
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
