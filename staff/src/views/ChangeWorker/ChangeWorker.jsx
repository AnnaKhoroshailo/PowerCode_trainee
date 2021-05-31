import "./index.css";
import imgBack from "../../images/back.svg";

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
      firstName: "",
      lastName: "",
      url: "",
      position: "",
      salary: "",
      status: "",
      date: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Обязательно!"),
      lastName: Yup.string().required("Обязательно!"),
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
      handleClickHome();
    },
  });

  useEffect(() => {
    if (worker) {
      setValues({
        firstName: worker.firstName,
        lastName: worker.lastName,
        url: worker.url,
        position: worker.position,
        salary: `${worker.salary}`,
        status: worker.status,
        date: moment(`Date(${worker.date})`).locale("en").format("yyyy-MM-DD"),
      });
    }
  }, [dispatch, worker, id, setValues]);

  let history = useHistory();
  function handleClickHome() {
    history.push("/");
  }

  return (
    <section className="container h-100 d-flex align-items-center">
      <div className="form-staff">
        <h1>Изменение</h1>
        <Button mobileNone back handleClick={handleClickHome}>
          <img src={imgBack} alt="На главную" />
        </Button>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-staff__elem">
            <label className="form-staff__text">Имя</label>
            <Input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              handleChange={formik.handleChange}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="form-staff__error">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">Фамилия</label>
            <Input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              handleChange={formik.handleChange}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="form-staff__error">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">URL картинки</label>
            <Input
              type="text"
              name="url"
              value={formik.values.url}
              handleChange={formik.handleChange}
            />
            {formik.errors.url && formik.touched.url && (
              <p className="form-staff__error">{formik.errors.url}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">Должность</label>
            <Input
              type="text"
              name="position"
              value={formik.values.position}
              handleChange={formik.handleChange}
            />
            {formik.errors.position && formik.touched.position && (
              <p className="form-staff__error">{formik.errors.position}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">Зарплата</label>
            <Input
              type="text"
              name="salary"
              value={formik.values.salary}
              handleChange={formik.handleChange}
            />
            {formik.errors.salary && formik.touched.salary && (
              <p className="form-staff__error">{formik.errors.salary}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">Статус</label>
            <Select
              formSelect
              name="status"
              value={formik.values.status}
              handleChange={formik.handleChange}
            >
              <option value="Работает">Работает</option>
              <option value="В отпуске">В отпуске</option>
              <option value="Уволен">Уволен</option>
            </Select>
            {formik.errors.status && formik.touched.status && (
              <p className="form-staff__error">{formik.errors.status}</p>
            )}
          </div>
          <div className="form-staff__elem">
            <label className="form-staff__text">Дата начала работы</label>
            <Input
              type="date"
              name="date"
              value={formik.values.date}
              handleChange={formik.handleChange}
            />
            {formik.errors.date && formik.touched.date && (
              <p className="form-staff__error">{formik.errors.date}</p>
            )}
          </div>
          <div className="form-staff__btn">
            <Button formBtn submit>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChangeWorker;
