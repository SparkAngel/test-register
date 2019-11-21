/*eslint-disable*/
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';

const requiredSelect = value => (value !== 'default' ? undefined : 'Обязательное поле');

const required = value => (value ? undefined : 'Обязательное поле');

const required3 = value => (/^\d+$/.test(value) ? undefined : 'Допустимы только цифры');

const required2 = value => (/^[A-Z|А-Я]/.test(value)
  ? undefined
  : 'Первая буква должна быть заглавной');

const maxLength = max => value => (value && value.length > max
  ? `Максимальная длина ${max} символов` : undefined);

const maxLength10 = maxLength(16);
const maxLength16 = maxLength(16);

const minLength = min => value => (value && value.length < min
  ? `Минимальная длина ${min} символов` : undefined);

const minLength16 = minLength(16);

const renderField = ({
  placeholder, input, label, type,
  meta: { touched, error },
}) => (
  <div className="form-wrap">
    <label>{label}</label>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className="form-control"
      maxLength="16"
    />
    {touched && ((error && <span className="error">{error}</span>))}
  </div>
);

const renderFieldSelect = ({
  placeholder, label, input, type,
  meta: { touched, error },
}) => (
  <div className="form-wrap">
    <label>{label}</label>
    <select
      {...input}
      type={type}
      placeholder={placeholder}
      className="custom-select"
    >
      <option value="default">Ваш пол</option>
      <option value="man">Мужчина</option>
      <option value="woman">Женщина</option>
    </select>
    {touched && ((error && <span className="error">{error}</span>))}
  </div>
);

const renderFieldSelect2 = ({
  placeholder, input, label, type,
  meta: { touched, error },
  input: { value },
}) => (
  <div className="form-wrap">
    <label>{label}</label>
    <select
      {...input}
      type={type}
      placeholder={placeholder}
      className="custom-select"
    >
      <option value="0">Недоступна</option>
      <option value="1">Пластиковая карта</option>
      <option value="2">Мобильное приложение</option>
    </select>
    {touched && ((error && <span className="error">{error}</span>))}
    {value === '1'
      ? (
        <Field
          className="form-control qq"
          placeholder="Номер карточки"
          name="cardNumbers"
          component={renderField}
          label="Введите номер карточки"
          validate={[required, maxLength16, minLength16, required3]}
        />
      )
      : ''}
  </div>
);

const RegisterForm = (props) => {

  const redirect = () => {
    if (props.submitSucceeded) {
      return <Redirect to="/clients" />;
    }

    return undefined;
  };

  return (
    <form
      onSubmit={props.handleSubmit}
      autoComplete="off"
      className="main-form"
    >
      <Field
        name="firstName"
        label="Введите имя"
        placeholder="Имя"
        component={renderField}
        validate={[required, maxLength10, required2]}
      />
      <Field
        className="form-control"
        placeholder="Фамилия"
        name="LastName"
        label="Введите фамилию"
        component={renderField}
        validate={[required, maxLength10, required2]}
      />
      <Field
        name="selectSex"
        component={renderFieldSelect}
        className="custom-select"
        validate={[requiredSelect]}
        label="Введите пол"
      />
      <Field
        className="custom-select"
        name="selectLoyality"
        component={renderFieldSelect2}
        label="Программа лояльности"
      />

      <button
        type="submit"
        disabled={props.submitting || props.pristine}
        className="btn btn-primary btn-sm"
      >
        Сохранить
      </button>
      {redirect()}
    </form>

  );
};

export default RegisterForm;
