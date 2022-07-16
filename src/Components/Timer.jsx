import { useTimer } from "./useTimer";

const Timer = () => {
  const {  minute, second, msecond,  onStart, onStop } =
    useTimer();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <h3>
        {minute}:{second}:{msecond}
      </h3>
      <button style={{ height: "50%", textAlign: "center" }} onClick={onStart}>
        Start
      </button>
      <button style={{ height: "50%", textAlign: "center" }} onClick={onStop}>
        Pause
      </button>
    </div>
  );
};
export default Timer;
