import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/InfoAside.scss";


const InfoAside = () => {
  interface sendEmail {
    Email: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<sendEmail>();
  const onSubmit: SubmitHandler<sendEmail> = async (data) => {
    console.log(data)
    const requestData = { data: { Email: data.Email } };

    console.log(requestData)

    try {
      // Make API call with fetch
      const response = await fetch('https://blog-personalblog.up.railway.app/api/email-marketings', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if response is ok (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        // Handle successful response
        console.log('Email saved successfully', responseData);
        // ... do something with the response data
      } else {
        // Handle error response
        console.error('Error while saving email', response.status);
        // ... do something with the error status code
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error while saving email', error);
      // ... do something with the error
    }
  };
  return (
    <>
      <aside className="InfoAside">
        <div className="infocontainer">
          <form onSubmit={handleSubmit(onSubmit)} className="formwrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("Email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Dirección de correo electrónico inválida",
                },
              })}
            />
            {errors?.Email?.message && <p>{errors.Email.message}</p>}
            <button type="submit" className="formbutton">Suscribete</button>
          </form>
        </div>
        <div className="infocontainer">
          <h3>Unete a mi Comunidad</h3>
          <p className="infoparafra">
            Somos un grupo de personas apasionadas por la programacion, este es
            el lugar perfecto para ti.
          </p>
          <div>
            <p>Haz Click</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default InfoAside;
