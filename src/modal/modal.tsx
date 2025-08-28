import * as yup from "yup";
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
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add operation</h5>
          <button type="button" className="close" onClick={() => onClose()}>
            <span>&times;</span>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-body">
            <div className="form-group">
              <label>Operation Title</label>
              <input {...register("title")} className="form-control" />
              <div className="form-text">{errors.title?.message}</div>
            </div>
            <div className="form-group">
              <label>Operation description</label>
              <input {...register("description")} className="form-control" />
              <div className="form-text">{errors.description?.message}</div>
            </div>
            <div className="modal-footer m-2">
              <input type="submit" className="btn btn-primary" />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onClose()}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
