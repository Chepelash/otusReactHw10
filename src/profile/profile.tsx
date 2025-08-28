import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";

const DataSouce = {
  friends: "friends or collegues",
  newsletters: "newsletters",
  socialMedia: "socialMedia",
};

const profileInputSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string(),
  dataSource: yup.string().required(),
});

type ProfileInput = yup.InferType<typeof profileInputSchema>;

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileInputSchema) });
  const onSubmit: SubmitHandler<ProfileInput> = (data) => console.log(data);

  return (
    <div className="container border rounded p-5 col-md-4">
      <h3>Profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} className="form-control" />
          <div className="form-text">{errors.name?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} className="form-control" />
          <div className="form-text">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <input {...register("message")} className="form-control" />
          <div className="form-text">{errors.message?.message}</div>
        </div>

        <div className="form-group">
          <label>DataSouce</label>
          <select {...register("dataSource")} className="form-control">
            <option value={DataSouce.friends}>{DataSouce.friends}</option>
            <option value={DataSouce.newsletters}>
              {DataSouce.newsletters}
            </option>
            <option value={DataSouce.socialMedia}>
              {DataSouce.socialMedia}
            </option>
          </select>
          <div className="form-text">{errors.dataSource?.message}</div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};
