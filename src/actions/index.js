export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (item1, item2) => {
    return {type:ADD_FEATURE , payload1: item1, payload2: item2 };
};

export const removeFeature = (item1, item2) => {
    return {type:REMOVE_FEATURE, payload1: item1, payload2: item2};
};