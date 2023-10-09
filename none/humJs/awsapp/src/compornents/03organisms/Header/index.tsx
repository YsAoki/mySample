import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
} from "react";
import {
  SHeader,
  SHumMenu,
  SHumTitleText,
  SMainInner,
  STitleText,
} from "./style";
import HumButton from "../../02molecules/HumButton";

export type ContextModal = {
  status: boolean;
  update: Dispatch<SetStateAction<boolean>>;
};

export const humContextVal = createContext<ContextModal | undefined>(undefined);

const Header: FC = () => {
  const [humOpen, setHumOpen] = useState(false);

  const value: ContextModal = {
    status: humOpen,
    update: setHumOpen,
  };

  const humClickEvent = () => {
    setHumOpen(!humOpen);
  };

  return (
    <SHeader>
      <humContextVal.Provider value={value}>
        <SMainInner>
          <STitleText tag="h1">トレーニング</STitleText>
          <HumButton onClick={humClickEvent} />
        </SMainInner>
        <SHumMenu humOpen={humOpen}>
          <SHumTitleText tag="h2">トレーニング</SHumTitleText>
        </SHumMenu>
      </humContextVal.Provider>
    </SHeader>
  );
};
export default Header;
