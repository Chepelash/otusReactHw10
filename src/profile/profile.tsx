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
    <div>
      <div>Profile</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>

        <label>Email</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <label>Message</label>
        <input {...register("message")} />
        <p>{errors.message?.message}</p>

        <label>DataSouce</label>
        <select {...register("dataSource")}>
          <option value={DataSouce.friends}>{DataSouce.friends}</option>
          <option value={DataSouce.newsletters}>{DataSouce.newsletters}</option>
          <option value={DataSouce.socialMedia}>{DataSouce.socialMedia}</option>
        </select>
        <p>{errors.dataSource?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};
