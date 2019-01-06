import * as ActionConsts from '../ActionConsts'

export const changeName = (nameValue) => {
  return {
      type:ActionConsts.SET_PERSON_NAME,
      person:{name:nameValue}
    };
};

export const changeSurname = (surnameValue) => {
  return {
    type:ActionConsts.SET_PERSON_SURNAME,
    person:{surname:surnameValue}
  };
};

