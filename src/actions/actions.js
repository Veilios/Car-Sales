export const addFeature = (state) => {
    return {type: "ADD_FEATURE", payload: state.car.feature };
};

export const removeFeature = () => {
    return {type: "REMOVE_FEATURE"};
};