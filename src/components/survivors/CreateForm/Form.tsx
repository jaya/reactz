import { useForm, SubmitHandler } from 'react-hook-form';
import { Gender } from '../../../types/gender.type';
import { SurvivorInputs } from '../../../types/survivorInputs.type';
import { useMutation } from 'react-query';
import { createSurvivor } from '../../../api/survivors.api';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SurvivorInputs>();
  const mutation = useMutation(
    (newSurvivor: SurvivorInputs) => createSurvivor(newSurvivor),
    {
      onSuccess: () => {
        // TODO: It must handle the response
        console.log('Created Succesfully');
      },
    },
  );

  const onSubmit: SubmitHandler<SurvivorInputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name', { required: true })} />
      {errors.name && <span>This field is required</span>}
      <label>Age</label>
      <input type="number" {...register('age', { required: true })} />
      {errors.age && <span>This field is required</span>}
      <label>Gender</label>
      <select {...register('gender')}>
        <option />
        <option value={Gender.Female}>female</option>
        <option value={Gender.Male}>male</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default Form;
