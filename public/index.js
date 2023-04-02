// import { UserContext } from "./context";
import { createRoot } from "react-dom/client";
const Route = ReactRouterDOM.Route;
// const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const Spa = () => {
  return (
    <HashRouter>
      <NavBar />
      <div className="container" style={{ padding: "20px" }}>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </div>
    </HashRouter>
  );
};

// ReactDOM.render(<Spa />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);
