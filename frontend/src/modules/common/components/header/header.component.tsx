/* eslint-disable @typescript-eslint/no-empty-object-type */
import { text } from "../../consts";
import { IBasicProps } from "../../types/props.types";

interface IProps extends IBasicProps {}

const HeaderComponent = ({ className }: IProps) => {
  return (
    <header className={className}>
      <div className="container">
        <p>{text.recipes}</p>
      </div>
    </header>
  );
};

export default HeaderComponent;
