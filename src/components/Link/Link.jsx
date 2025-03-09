import "./style.scss";

function Link(props) {
  return (
    <a
      href="#"
      className={`link ${props.style === "light" ? "link--light" : ""}`}
    >
      {props.icon&& <img src={props.icon} alt="" />}
      {props.text}
    </a>
  );
}

export default Link;
