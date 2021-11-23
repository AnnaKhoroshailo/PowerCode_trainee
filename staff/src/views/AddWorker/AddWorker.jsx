import imgBack from "../../images/back.svg";

import { asyncAddWorker } from "../../actions/";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "../../components/Form";
import Button from "../../components/Button";

function AddWorker() {
  const dispatch = useDispatch();

  const formik = useFormik({
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
      dispatch(asyncAddWorker(worker));
      handleClickHome();
    },
  });

  let history = useHistory();
  function handleClickHome() {
    history.push("/");
  }

  return (
    <section className="container h-100 d-flex align-items-center">
      <div className="form-staff">
        <h1>Создание</h1>
        <Button mobileNone back handleClick={handleClickHome}>
          <img src={imgBack} alt="На главную" />
        </Button>
        <Form
          handleSubmit={formik.handleSubmit}
          handleChange={formik.handleChange}
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          isValid={formik.isValid}
          dirty={formik.dirty}
          buttonText="Создать"
        />
      </div>
    </section>
  );
}

export default AddWorker;
