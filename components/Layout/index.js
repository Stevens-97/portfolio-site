import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <div className="content">
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
}
