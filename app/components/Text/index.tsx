import { vars } from "~/styles/theme.css";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function Text({ children, ...rest }: TextProps) {
  return <p>{children}</p>;
}

export default Text;
