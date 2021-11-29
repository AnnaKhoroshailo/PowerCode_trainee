import Input from "../Input";
import Button from "../Button";
function LogInForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div className="form__elem">
        <Input
          type="text"
          name="login"
          value={props.values.login}
          handleChange={props.handleChange}
          label="Логин"
        >
          {props.errors.login && props.touched.login && (
            <p className="form__error">{props.errors.login}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Input
          type="password"
          name="password"
          value={props.values.password}
          handleChange={props.handleChange}
          label="Пароль"
        >
          {props.errors.password && props.touched.password && (
            <p className="form__error">{props.errors.password}</p>
          )}
        </Input>
      </div>
      <div className="form__btn w-100">
        <Button formBtn submit disabled={!(props.isValid && props.dirty)}>
          {props.buttonText}
        </Button>
      </div>
    </form>
  );
}

export default LogInForm;
