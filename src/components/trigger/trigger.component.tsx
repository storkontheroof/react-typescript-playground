import { forwardRef, ReactElement } from "react";

import * as Icons from "@components/icons";
import { TriggerProps } from "./trigger.types";
import * as Styled from "./trigger.styles";

export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  (props, accountDropdownRef): ReactElement => {
    const { onClick, title, isChevronUp } = props;

    return (
      <Styled.Container ref={accountDropdownRef} onClick={onClick}>
        <Styled.TriggerContainer>
          <h1>{title}</h1>
          {isChevronUp ? (
            <Icons.ChevronUp style={{ marginLeft: "2.65px" }} />
          ) : (
            <Icons.ChevronDown style={{ marginLeft: "2.65px" }} />
          )}
          <p>After the chevron</p>
        </Styled.TriggerContainer>
      </Styled.Container>
    );
  }
);
