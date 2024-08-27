"use client";

import { useEffect, useState } from "react";
import { CardModal } from "../modals/card-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
    </>
  );
};
