import { Button } from "./styles";

const BtnPages = ({ text, backgroundColor, color, width }) => {
  return (
    <Button backgroundColor={backgroundColor} width={width} color={color}>
      { text }
    </Button>
  );
};

export default BtnPages;
