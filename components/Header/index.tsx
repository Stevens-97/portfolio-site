interface Props {
  title: string;
}

export default function Header(Props: Props) {
  const { title } = Props;
  return <h1 className="title">{title}</h1>;
}
