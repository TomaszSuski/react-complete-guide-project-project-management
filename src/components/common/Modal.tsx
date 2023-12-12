import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  closeBtnText?: string;
  onModalClose?: () => void;
}

const Modal = forwardRef(function Modal(
  { children, onModalClose, closeBtnText }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current!.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="p-4 rounded-lg">
      {children}
      <form method="dialog" onSubmit={onModalClose} className="w-full mt-4">
        <button className="px-6 py-2 rounded-md bg-stone-600 text-stone-200 hover:bg-stone-950 hover:text-stone-50">
          {closeBtnText || "Close"}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
