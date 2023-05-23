import { ButonAntd } from "./button.styles";
import { ButtonProps } from "antd";

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ children, margin, ...props }: ButtonCurrentProps) => {
  return (
    <ButonAntd {...props} style={{ margin: margin }}>
      {children}
    </ButonAntd>
  );
};

export default Button;
