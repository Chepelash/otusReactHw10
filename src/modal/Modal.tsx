import * as yup from "yup";
import "./modal.css";
import type { OperationData } from "../operations/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

const operationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});
type operationSchemaType = yup.InferType<typeof operationSchema>;

export interface ModalProps {
  onNewData: (newVal: OperationData) => void;
  onClose: () => void;
}
export const Modal = ({ onNewData, onClose }: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(operationSchema),
  });
  const onSubmit: SubmitHandler<operationSchemaType> = (data) => {
    onNewData(data);
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Operation Title</label>
            <input {...register("title")} />
            <p>{errors.title?.message}</p>

            <label>Operation description</label>
            <input {...register("description")} />
            <p>{errors.description?.message}</p>

            <input type="submit" />
          </form>
          <button onClick={() => onClose()}>Close form</button>
        </div>
      </div>
    </div>
  );
};
