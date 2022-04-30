import Container from "../components/Container";

const LandingPage = () => {
  return (
    <Container size={1080}>
      {/* Todo: trocar h1 pra imagerm */}
      <h1>Logo Projeto</h1>
      <p style={{ maxWidth: "793px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Donec enim diam
        vulputate ut pharetra. Egestas fringilla phasellus faucibus scelerisque
        eleifend donec pretium vulputate. Aliquet nibh praesent tristique magna
        sit.
      </p>
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </Container>
  );
};

export default LandingPage;
