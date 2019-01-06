import * as ActionConsts from '../ActionConsts'

export const addRelation = (relationText) => {
  return {
      type:ActionConsts.ADD_RELATION,
      relationValue:relationText
    };
};

