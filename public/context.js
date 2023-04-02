import { React, createContext } from "react";

const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

// integrate into code above
// line 1

// after line 4
// const [unicornTypes, setUnicornTypes] = useState(undefined);
// context = createContext({ unicornTypes, setUnicornTypes });
// above line 14 (before return)
// combine below content with return above
// const ReferenceDataContextProvider = ({ children }) => {
//   return (
//     <ReferenceDataContext.Provider value={{ unicornTypes, setUnicornTypes }}>
//       {...children}
//     </ReferenceDataContext.Provider>
//   );
// };

// export { ReferenceDataContext, ReferenceDataContextProvider };
