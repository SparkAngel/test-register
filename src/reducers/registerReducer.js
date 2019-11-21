/*eslint-disable*/
const initialState = {
  inputValue: '',
  clientName: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_NAME':
      return {
        ...state,
        inputValue: action.value,
      };
    case 'BUTTON_ADD':
      let value = action.formData;
      let  date = new Date();
      let m = date.getMonth()+1;
      let y = date.getFullYear();
      let d = date.getDate();
      let qq = [d, m, y].toString().replace(/,/g, '.');

      return {
        ...state,
        clientName: [...state.clientName, Object.assign(value, { date:  qq })],
      };
    default:
      return state;
  }
};

export const inputNameCreator = values => ({ type: 'INPUT_NAME', value: values });

export const buttonCreator = formData => ({ type: 'BUTTON_ADD', formData });

export default registerReducer;
