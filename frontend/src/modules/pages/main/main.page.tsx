/* eslint-disable @typescript-eslint/no-empty-object-type */

import { IBasicProps } from "../../common/types";

interface IProps extends IBasicProps {}
const MainPageContainer = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className="main-container">{"/main"}</div>
    </div>
  );
};

export default MainPageContainer;
