import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";
import { Container, ContainerTimers, Timer, TimerText } from "./styles";
export const Pomodoro: React.FC = () => {
  const [time, setTime] = useState(20 * 60);
  const [activeTime, setActiveTime] = useState("long");
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(20 * 60);

  const handleChangeTimer = (value: number, type: string) => {
    setTime(value);
    setActiveTime(type);
    setReset(value);
    setStart(false);
  };

  const handleStart = () => {
    setStart(!start);
  };

  const handleReset = () => {
    setTime(reset);
    setStart(false);
  };

  const handleTimer = () => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time === 0) {
      setStart(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  };

  const formatTimeLeft = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  const calcPercentage = () => {
    if (activeTime === "pomo") {
      return (time / (15 * 60)) * 100;
    }
    if (activeTime === "short") {
      return (time / (10 * 60)) * 100;
    }
    if (activeTime === "long") {
      return (time / (20 * 60)) * 100;
    }
  };

  useEffect(() => {
    if (start) {
      handleTimer();
    }
  }, [start, activeTime]);

  return (
    <Container>
      <AnimatedCircularProgress
        size={300}
        width={15}
        fill={calcPercentage() || 0}
        tintColor={colors.activeButton}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor={colors.subjectBackground}
      >
        {(fill) => <Timer>{formatTimeLeft(time)}</Timer>}
      </AnimatedCircularProgress>
      <ContainerTimers>
        <TouchableOpacity onPress={() => handleChangeTimer(10 * 60, "short")}>
          <TimerText active={activeTime === "short"}>10:00</TimerText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleChangeTimer(15 * 60, "pomo")}>
          <TimerText active={activeTime === "pomo"}>15:00</TimerText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleChangeTimer(20 * 60, "long")}>
          <TimerText active={activeTime === "long"}>20:00</TimerText>
        </TouchableOpacity>
      </ContainerTimers>

      <TouchableOpacity onPress={handleStart}>
        <AntDesign name={start ? "pause" : "play"} size={80} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReset}>
        <TimerText>Resetar</TimerText>
      </TouchableOpacity>
    </Container>
  );
};
