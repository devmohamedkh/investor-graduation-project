import React from "react";
import Modal from "react-modal";

function AddInvistemintModel({
  isModalOpen,
  handelOpenModal,
  setQuentity,
  Quentity,
  handelModelSubmit,
}) {
  return (
    <div>
      <Modal
        style={{
          content: {
            width: "500px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        appElement={document.getElementById("app")}
        isOpen={isModalOpen}
        onRequestClose={isModalOpen}
        // style={customStyles}
        // contentLabel="Example Modal"
      >
        <div>
          <button onClick={handelOpenModal} className="model-close">
            close
          </button>

          <input
            type="number"
            name="quentity"
            id="quentity"
            className="model-input"
            placeholder="quentity"
            value={Quentity}
            onChange={(e) => setQuentity(e.target.value)}
          />
          <button className="model-btn" onClick={handelModelSubmit}>
            INVIST NOW
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AddInvistemintModel;
