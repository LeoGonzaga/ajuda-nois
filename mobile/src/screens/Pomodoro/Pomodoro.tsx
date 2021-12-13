import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Container,
    ContainerTimers,
    Indicator,
    Timer,
    TimerText
} from "./styles";

export const Pomodoro: React.FC = () => {
    const [time, setTime] = useState('20:00');
    return (
        <Container>
            <Indicator>
                <Timer>20:00</Timer>
            </Indicator>
            <ContainerTimers>
                <TouchableOpacity>
                    <TimerText>10:00</TimerText>
                </TouchableOpacity>

                <TouchableOpacity>
                    <TimerText>15:00</TimerText>
                </TouchableOpacity>

                <TouchableOpacity>
                    <TimerText>20:00</TimerText>
                </TouchableOpacity>
            </ContainerTimers>

            <TouchableOpacity>
                <AntDesign name="play" size={80} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
                <TimerText>Resetar</TimerText>
            </TouchableOpacity>
        </Container>
    );
};
