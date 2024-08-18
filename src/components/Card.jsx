const Card = ({ children, bg = "bg-light" }) => {
  return <div className={`card ${bg}`}>{children}</div>;
};

export default Card;
