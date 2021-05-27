import "./index.css";

import { asyncGetWorker } from "../../actions/";
import { asyncUpdateWorker } from "../../actions/";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import moment from "moment";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

function ChangeWorker() {
  const { id } = useParams();
  let worker = useSelector((state) =>
    state.staff.find((worker) => worker.id === Number(id))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!worker) dispatch(asyncGetWorker(id));
  }, [dispatch, worker, id]);

  const { setValues, ...formik } = useFormik({
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
      dispatch(asyncUpdateWorker(id, worker));
      handleClick();
    },
  });

  useEffect(() => {
    if (worker) {
      setValues({
        name: worker.name,
        url: worker.url,
        position: worker.position,
        salary: `${worker.salary}`,
        status: worker.status,
        date: moment(`Date(${worker.date})`).format("YYYY-MM-DD"),
      });
    }
  }, [dispatch, worker, id, setValues]);

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <section className="container h-100 d-flex align-items-center">
      <div className="form-staff">
        <h1>Изменение</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-elem">
            <label>Имя</label>
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              handleChange={formik.handleChange}
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
              handleChange={formik.handleChange}
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
              handleChange={formik.handleChange}
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
            <Button type="submit">Сохранить</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChangeWorker;
