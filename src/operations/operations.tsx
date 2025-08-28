import { useState } from "react";
import { Modal } from "../modal/modal";

interface OperationList {
  id: string;
  title: string;
  description?: string;
}
export type OperationData = Omit<OperationList, "id">;

export const Operations = () => {
  const [operationList, setOperationList] = useState<OperationList[]>([]);
  const [modalVisible, isModalVisible] = useState<boolean>(false);
  function removeOperation(id: string): void {
    setOperationList((op) => op.filter((op) => op.id !== id));
  }
  function handleModalFormSubmit(data: OperationData): void {
    setOperationList([...operationList, { id: crypto.randomUUID(), ...data }]);
    isModalVisible(false);
  }

  return (
    <div className="container p-5 col-md-4">
      <div className="row">
        <h3 className="col">Operations</h3>
        <button className="col" onClick={() => isModalVisible(true)}>
          Add new operation
        </button>
      </div>
      {operationList.length > 0 ? (
        <ul className="list-group">
          {operationList.map((op: OperationList) => (
            <li key={op.id} className="list-group-item">
              <div className="row">
                <h2 className="col-md-10">{op.title}</h2>
                <button
                  className="col-md-2"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Remove operation"
                  onClick={() => {
                    removeOperation(op.id);
                  }}
                >
                  <span>&times;</span>
                </button>{" "}
              </div>
              <p>{op.description}</p>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p>Currently empty. Add new operation by pressing the button</p>
      )}
      {modalVisible && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0, 0, 0, .8)",
          }}
        >
          <Modal
            onNewData={(newVal: OperationData) => handleModalFormSubmit(newVal)}
            onClose={() => isModalVisible(false)}
          ></Modal>
        </div>
      )}
    </div>
  );
};
