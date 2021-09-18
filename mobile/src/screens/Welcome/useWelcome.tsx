import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "../../constants/routers";

type Welcome = {
  handleClick: () => void;
};

const useWelcome = (): Welcome => {
  const navigation = useNavigation();

  const handleClick = useCallback(() => {
    console.log(router.home);
    navigation.navigate(router.home);
  }, []);

  return {
    handleClick,
  };
};

export default useWelcome;
