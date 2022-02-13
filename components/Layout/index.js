import NavBar from "../NavBar";
import Header from "../Header/index.tsx";

export default function Layout({ children }) {
  return (
    <div className="content">
      <div>
        <Header title="PORTFOLIO SITE" />
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
}
