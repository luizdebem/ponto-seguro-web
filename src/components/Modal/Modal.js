import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClick = (e) => {
    if (e.target.className === 'modal display-block') {
      handleClose();
    }
  }

  return (
    <div className={showHideClassName} onClick={handleClick}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;