import "./style.css";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div className="form__elem">
        <Input
          type="text"
          name="firstName"
          value={props.values.firstName}
          handleChange={props.handleChange}
          label="Имя"
        >
          {props.errors.firstName && props.touched.firstName && (
            <p className="form__error">{props.errors.firstName}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Input
          type="text"
          name="lastName"
          value={props.values.lastName}
          handleChange={props.handleChange}
          label="фамилия"
        >
          {props.errors.lastName && props.touched.lastName && (
            <p className="form__error">{props.errors.lastName}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Input
          type="text"
          name="url"
          value={props.values.url}
          handleChange={props.handleChange}
          label="URL картинки"
        >
          {props.errors.url && props.touched.url && (
            <p className="form__error">{props.errors.url}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Input
          type="text"
          name="position"
          value={props.values.position}
          handleChange={props.handleChange}
          label="Должность"
        >
          {props.errors.position && props.touched.position && (
            <p className="form__error">{props.errors.position}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Input
          type="text"
          name="salary"
          value={props.values.salary}
          handleChange={props.handleChange}
          label="Зарплата"
        >
          {props.errors.salary && props.touched.salary && (
            <p className="form__error">{props.errors.salary}</p>
          )}
        </Input>
      </div>
      <div className="form__elem">
        <Select
          formSelect
          name="status"
          value={props.values.status}
          handleChange={props.handleChange}
          label="Статус"
        >
          <option value="">Выберите статус</option>
          <option value="Работает">Работает</option>
          <option value="В отпуске">В отпуске</option>
          <option value="Уволен">Уволен</option>
        </Select>
        {props.errors.status && props.touched.status && (
          <p className="form__error">{props.errors.status}</p>
        )}
      </div>
      <div className="form__elem">
        <Input
          type="date"
          name="date"
          value={props.values.date}
          handleChange={props.handleChange}
          label="Дата начала работы"
        >
          {props.errors.date && props.touched.date && (
            <p className="form__error">{props.errors.date}</p>
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

export default Form;
