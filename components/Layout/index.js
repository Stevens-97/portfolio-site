import NavBar from "../NavBar";
import Header from "../Header/index.tsx";

export default function Layout({ children }) {
  return (
    <div className="content">
      <div>
        <div className="navBar">
          <Header title="PORTFOLIO SITE" />
          <NavBar />
        </div>
      </div>
      <div className="children">{children}</div>
    </div>
  );
}
