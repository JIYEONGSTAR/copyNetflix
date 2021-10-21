import React from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "Store";
const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  return { currentUser, setCurrentUser };
  //{currentUser : currentUser, setCurrentUser:setCurrentUser}
};

export default useCurrentUser;
