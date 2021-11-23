import { asyncLogIn } from "../../actions/";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import LogInForm from "../../components/LogInForm";

function LogIn() {
  const dispatch = useDispatch();

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
    </section>
  );
}

export default LogIn;
