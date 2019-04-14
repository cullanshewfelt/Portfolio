// ==============================================================================================================
// MODAL ACTIONS
// ==============================================================================================================

export const initializeData = ({
  data: []
}) => ({
  type: 'INITIALIZE_MODAL',
  data: data
});

// export const toggleModal = (modal, selectedCueId, selectedCue, selectedCategories, selectedComposer) => ({
//   type: 'TOGGLE_MODAL',
//   modal: {
//     ...modal,
//     showModal: !modal.showModal,
//     selectedCategories: selectedCategories,
//     selectedCueId: selectedCueId,
//     selectedCue: selectedCue,
//     selectedComposer: selectedComposer
//   }
// });
