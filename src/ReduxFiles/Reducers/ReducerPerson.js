import * as ActionConsts from '../ActionConsts';

var emptyPersonState={
    name:"default adı",
    surname:"default soyadı"
}

const personReducer = (state=emptyPersonState,action) => {
    switch (action.type) {
        case ActionConsts.SET_PERSON_NAME:
            let newState= Object.assign({},state,{name:action.person.name});
            return newState;
            //Object.assign yeni bir nesne oluşturur
            //state.name=action.person.name diye atama yaparsak componentler değişikliği algılamaz
            //burda state deki name e yeni değer atanarak yeni nesne döndürülür
        case ActionConsts.SET_PERSON_SURNAME:
            return Object.assign({},state,{surname:action.person.surname});
        default:
            return state;
    }
  };

export default personReducer;
