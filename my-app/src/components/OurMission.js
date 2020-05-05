import React from "react";
import { useState, useEffect } from "react";
// const OurMission = () => (
//   <>
//     <section className="ourMission">
//       <div>
//         <h1>Komu pomagamy</h1>
//         <div className="decoration"></div>
//         <button>Fundacjom</button>
//         <button>Organizacjom pozarządowym</button>
//         <button>Lokalnym zbiórkom</button>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolor
//           voluptatum <br /> corporis saepe aperiam voluptate perferendis <br />{" "}
//           perspiciatis. Quis, obcaecati? Quia, nam!
//         </p>
//       </div>
//     </section>
//     <section>
//       <div>
//         <div className="spans">
//           <h1>Organizacja "Pomóż naleśnikowi"</h1>
//           <span>Lorem ipsum dolor sit.</span>
//         </div>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
//           libero?
//         </p>
//         <hr />
//       </div>
//       <div>
//         <div className="spans">
//           <h1>Organizacja "Pomóż pomagającym"</h1>
//           <span>Lorem ipsum dolor sit.</span>
//         </div>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
//           libero?
//         </p>
//         <hr />
//       </div>
//       <div>
//         <div className="spans">
//           <h1>Orgaizacja "Pomóż Scarlet"</h1>
//           <span>Lorem ipsum dolor sit.</span>
//         </div>

//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
//           libero?
//         </p>
//       </div>
//       <div className="ourbuttons">
//         <button>1</button>
//         <button>2</button>
//       </div>
//     </section>
//   </>
// );
const OurMission = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState("Fundacjom");
  const url = "http://localhost:3000/fundations";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setData(response));
  }, []);

  const handleChangeFundation = (e) => {
    setCurrent(e.target.name);
  };

  return (
    <div>
      {console.log(current)}
      {data.map((dates, index) => (
        <button name={dates.name} onClick={handleChangeFundation}>
          {dates.name}
        </button>
      ))}
      <ul>
        {data
          .find((fund) => fund.name === current)
          ?.items.map((el) => (
            <li>{el.header}</li>
          ))}
      </ul>
    </div>
  );
};
export default OurMission;
