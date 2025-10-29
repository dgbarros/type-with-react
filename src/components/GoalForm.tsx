import { SetStateAction, useState } from "react";

function GoalForm() {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
};

const onSubmit = () => {
    console.log("Enviado");
}

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Digite algo"
        ></input>
        <label htmlFor="title">Nome da meta</label>
        <button type="submit">
            Enviar Estado
        </button>
      </form>
    </div>
  );
}

export default GoalForm;
