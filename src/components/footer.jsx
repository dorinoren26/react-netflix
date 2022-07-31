const Footer = () => {
  return (
    <>
      <p className="border-top pt-3 text-center footer">
        <span>N E T F L I X </span>
        <span className="mx-1"> &copy;</span>
        <span>{new Date().getFullYear()}</span>
        <br />
      </p>
    </>
  );
};

export default Footer;
