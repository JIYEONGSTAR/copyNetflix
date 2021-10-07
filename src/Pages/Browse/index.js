import React from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "Store";

const Browse = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  return (
    <div>
      <h1>{currentUser}</h1>
    </div>
  );
};

export default Browse;
