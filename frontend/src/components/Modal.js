import { useRef } from 'react';

const Modal = (props) => {
  const modalRef = useRef();
  const closeModal = e => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  }
  return (
    <>
      {props.showModal ?
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" ref={modalRef} onClick={closeModal} />
            </div>
            {/* For centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
            {props.children}
          </div>
        </div>
        : null}
    </>
  );
}

export default Modal;