import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { countAtom } from "./Store/Atoms/Count";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Count({}) {
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Butttons />
      </RecoilRoot>
    </div>
  );
}

function Butttons({}) {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
