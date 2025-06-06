import useBillboard from "@/hooks/useBillboard ";
import React, { useCallback } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
    </div>
  );
};

export default Billboard;
