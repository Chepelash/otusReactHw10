import { useState } from "react";
import { Modal } from "../modal/Modal";

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
    <div>
      <div>Operations</div>
      <button onClick={() => isModalVisible(true)}>Add new operation</button>
      {operationList.length > 0 ? (
        <ul>
          {operationList.map((op: OperationList) => (
            <li key={op.id}>
              <h2>{op.title}</h2> <p>{op.description}</p>{" "}
              <button
                onClick={() => {
                  removeOperation(op.id);
                }}
              >
                X
              </button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <div>Currently empty. Add new operation by pressing the button</div>
      )}
      {modalVisible && (
        <Modal
          onNewData={(newVal: OperationData) => handleModalFormSubmit(newVal)}
          onClose={() => isModalVisible(false)}
        ></Modal>
      )}
    </div>
  );
};
