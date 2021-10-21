import useCurrentUser from "Hooks/useCurrentUser";
import React from "react";
import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { currentUserState } from "Store";
//로그인 된 상태에서만 되게 핸들링
const Browse = () => {
  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { currentUser } = useCurrentUser();

  return (
    <div>
      <h1>{currentUser}</h1>
    </div>
  );
};

export default Browse;
