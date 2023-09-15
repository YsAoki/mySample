import React, { useMemo, useState } from "react";
import RegularButton from "./compornents/01atoms/RegularButton";
import Flame from "./compornents/02molecules/Flame";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const { isSp, isTablet, isPc } = useMediaQuery();

  const [num, setNum] = useState(0);

  const clickEvent = () => {
    setNum(num + 1);
  }

  //usememoを使った実装。引数になっている値。依存配列3個のうち、どれかに変更があった場合にだけ呼ばれる。今回は全てに変更があった場合に行われる。実行文としてのconsole.log。
  const backgroundColor = useMemo(() => {
    console.log("チェック！！")
    if (isSp) {
      return "red";
    }
    if (isTablet) {
      return "yellow";
    }
    if (isPc) {
      return "blue";
    }
    return "red";
  }, [isPc, isSp, isTablet]);

  return (
    <div className="App">
      <Flame>
        <RegularButton bgColor={backgroundColor} onClick={clickEvent}>
          レスポンシブ
        </RegularButton>
        <p>{num}</p>
      </Flame>
    </div>
  );
}

export default App;
