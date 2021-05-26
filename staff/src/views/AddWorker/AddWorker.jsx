import "./index.css";

import { asyncAddWorker } from "../../actions/";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

function AddWorker() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
      position: "",
      salary: "",
      status: "",
      date: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Обязательно!"),
      url: Yup.string().required("Обязательно!"),
      position: Yup.string().required("Обязательно!"),
      salary: Yup.number().typeError("Введите число!").required("Обязательно!"),
      status: Yup.string().required("Обязательно!"),
      date: Yup.date()
        .max(new Date(), "Дата превышает текущую!")
        .required("Обязательно!"),
    }),
    onSubmit: (values) => {
      let worker = {
        ...values,
        date: new Date(values.date).getTime(),
        salary: +values.salary,
      };
      dispatch(asyncAddWorker(worker), handleClick);
      handleClick();
    },
  });

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <div className="Form">
      <section className="container">
        <h1>Новый сотрудник</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-elem">
            <label>Имя</label>
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="form-error">{formik.errors.name}</p>
            )}
          </div>
          <div className="form-elem">
            <label>URL картинки</label>
            <Input
              type="text"
              name="url"
              value={formik.values.url}
              onChange={formik.handleChange}
            />
            {formik.errors.url && formik.touched.url && (
              <p className="form-error">{formik.errors.url}</p>
            )}
          </div>
          <div className="form-elem">
            <label>Должность</label>
            <Input
              type="text"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
            />
            {formik.errors.position && formik.touched.position && (
              <p className="form-error">{formik.errors.position}</p>
            )}
          </div>
          <div className="form-elem">
            <label>Зарплата</label>
            <Input
              type="text"
              name="salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
            />
            {formik.errors.salary && formik.touched.salary && (
              <p className="form-error">{formik.errors.salary}</p>
            )}
          </div>
          <div className="form-elem">
            <label>Статус</label>
            <Select
              name="status"
              value={formik.values.status}
              handleChange={formik.handleChange}
            >
              <option value="">Выберите статус</option>
              <option value="Работает">Работает</option>
              <option value="В отпуске">В отпуске</option>
              <option value="Уволен">Уволен</option>
            </Select>
            {formik.errors.status && formik.touched.status && (
              <p className="form-error">{formik.errors.status}</p>
            )}
          </div>
          <div className="form-elem">
            <label>Дата начала работы</label>
            <Input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
            {formik.errors.date && formik.touched.date && (
              <p className="form-error">{formik.errors.date}</p>
            )}
          </div>
          <div>
            <Button type="submit">Добавить</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddWorker;