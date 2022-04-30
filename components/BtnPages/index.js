import { Button } from "./styles";

const BtnPages = ({ text, backgroundColor, width }) => {
  return (
    <Button backgroundColor={backgroundColor} width={width}>
      { text }
    </Button>
  );
};

export default BtnPages;
