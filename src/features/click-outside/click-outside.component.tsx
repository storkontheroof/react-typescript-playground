import { useRef, useState } from "react";

import { ClickOutsideContainer } from "@components/utils/click-outside.component";
import { Trigger } from "@components/trigger";
import { Overlay } from "@components/overlay";

export const ClickOutsideExample = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const onClickOutside = () => {
    // console.log(">>> onClickOutside handler");
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <ClickOutsideContainer ref={ref} onClickOutside={onClickOutside}>
      <Trigger
        title="Click Outside Example"
        onClick={() => setIsOverlayVisible(!isOverlayVisible)}
        isChevronUp={isOverlayVisible}
      />
      <Overlay isVisible={isOverlayVisible}>
        <h1>Some content in the overlay</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Overlay>
    </ClickOutsideContainer>
  );
};
