import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";
import { postActivity, validateForm } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../redux/actions/actions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [duracion, setDuracion] = useState("");
  const [temporada, setTemporada] = useState("");
  const [countryId, setCountryId] = useState(null);
  const error = useSelector((state) => state.error);

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      dificultad,
      duracion,
      temporada,
      countryId
    };
    dispatch(validateForm(data));
    if (error) {
      return;
    }
    dispatch(postActivity(data));
    navigate("/activities");
  };

  return (
    <div className={style.section}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Dificultad"
          value={dificultad}
          onChange={(event) => setDificultad(event.target.value)}
        />
        <input
          type="number"
          placeholder="Duracion"
          value={duracion}
          onChange={(event) => setDuracion(event.target.value)}
        />
        <input
          type="text"
          placeholder="Temporada"
          value={temporada}
          onChange={(event) => setTemporada(event.target.value)}
        />
        <div>
          <label htmlFor="country">País:</label>
          <select
            id="country"
            onChange={(event) => setCountryId(event.target.value)}
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Enviar</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Form;
