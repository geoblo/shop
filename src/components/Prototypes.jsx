import React from "react";
import useActions from "../hooks/useAction";
import usePrototypes from "./../hooks/usePrototypes";

function Prototypes() {
  const prototypes = usePrototypes();
  console.log(prototypes);
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title"></div>
                <p className="prototype__price"></p>
                <p className="prototype__desc"></p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Prototypes;
