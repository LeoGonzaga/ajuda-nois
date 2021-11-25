import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { router } from "../../constants/routers";

type Welcome = {
  handleClick: () => void;
};

const useWelcome = (): Welcome => {
  const navigation = useNavigation();

  const handleClick = useCallback(() => {
    navigation.navigate(router.home);
  }, []);

  return {
    handleClick,
  };
};

export default useWelcome;
