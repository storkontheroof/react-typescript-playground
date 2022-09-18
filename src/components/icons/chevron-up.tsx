import classNames from "classnames";

import * as Styled from "./icon.styles";
import { ICON_CLASSNAME } from "./icon.constants";
import { IconProps } from "./icon.types";

export const ChevronUp = ({ className, ...rest }: IconProps) => {
  return (
    <Styled.Icon className={classNames(ICON_CLASSNAME, className)} {...rest}>
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </Styled.Icon>
  );
};
