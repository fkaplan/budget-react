export const addEntryRedux = (payloadAdd) => {
  return { type: "ADD_ENTRY", payload: payloadAdd };
};

export const removeEntryRedux = (id) => {
  return { type: "REMOVE_ENTRY", payload: { id } };
};
