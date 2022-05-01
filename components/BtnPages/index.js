import { Button } from "./styles";

const BtnPages = ({ text, backgroundColor, color, width, onClick }) => {
  return (
    <Button backgroundColor={backgroundColor} width={width} color={color} onClick={onClick}>
      { text }
    </Button>
  );
};

export default BtnPages;
