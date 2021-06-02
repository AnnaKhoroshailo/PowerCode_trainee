import imgBack from "../../images/back.svg";

import { asyncGetWorker } from "../../actions/";
import { asyncUpdateWorker } from "../../actions/";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";

import moment from "moment";

import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "../../components/Form";
import Button from "../../components/Button";

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
        <Form
          handleSubmit={formik.handleSubmit}
          handleChange={formik.handleChange}
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          isValid={formik.isValid}
          dirty={formik.dirty}
          buttonText="Редактировать"
        />
      </div>
    </section>
  );
}

export default ChangeWorker;
