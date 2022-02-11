export default function Layout({ children }) {
  return (
    <div>
      <div className="container">
        <h1>navigation will go here!</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
