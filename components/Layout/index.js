import NavBar from "../NavBar";
import Header from "../Header/index.tsx";

export default function Layout({ children }) {
  return (
    <div className="content">
      <div>
        <div className="navBar">
          <div className="portfolio-title">
            <Header title="PORTFOLIO SITE" />
          </div>
          <div className="nav-section"></div>
        </div>
        <NavBar />
      </div>
      <div className="children">{children}</div>
    </div>
  );
}
