import ReducerPerson from './ReducerPerson';
import ReducerRelation from './ReducerRelation';
import {combineReducers} from 'redux';

const reducerCombined=combineReducers({
    ReducerPerson,
    ReducerRelation
});

export default reducerCombined;

//uygulamadaki bütün reducerları alır mergeler
//store üretilirken bütünleştirilmiş redure u çağırıcaz