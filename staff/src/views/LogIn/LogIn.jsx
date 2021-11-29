import { asyncLogIn } from "../../actions/";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import LogInForm from "../../components/LogInForm";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

function LogIn() {
  const dispatch = useDispatch();
  const authorize = useSelector((state) => state.authorize);
  const [flagModal, setFlagModal] = useState(false);

  useEffect(() => {
    if (authorize && !authorize.length) setFlagModal(true);
  }, [authorize]);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().required("Обязательно!"),
      password: Yup.string().required("Обязательно!"),
    }),
    onSubmit: (values) => {
      let user = {
        ...values,
      };
      dispatch(asyncLogIn(user));
    },
  });

  function handleClickCloseModal() {
    setFlagModal(false);
  }

  return (
    <section className="container h-100 d-flex align-items-center">
      <div className="form-staff">
        <LogInForm
          handleSubmit={formik.handleSubmit}
          handleChange={formik.handleChange}
          values={formik.values}
          errors={formik.errors}
          touched={formik.touched}
          isValid={formik.isValid}
          dirty={formik.dirty}
          buttonText="Войти"
        />
      </div>
      <Modal visible={flagModal}>
        <h3>Логин или пароль неверный</h3>
        <div className="mt-5 mb-4 d-flex justify-content-center">
          <Button modalBtn error handleClick={handleClickCloseModal}>
            Закрыть
          </Button>
        </div>
      </Modal>
    </section>
  );
}

export default LogIn;
