import * as ActionConsts from '../ActionConsts';

var emptyRelation=[
    "relation-1"
]
const relationReducer = (state=emptyRelation,action) => {
    switch (action.type) {
        case ActionConsts.ADD_RELATION:
            let newRelationArray=[...state];
            newRelationArray.push(action.relationValue);
            return newRelationArray;
        default:
            return state;
    }
  };

  
export default relationReducer;