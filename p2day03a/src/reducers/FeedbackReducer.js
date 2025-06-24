export const intialState = {
  name: '',
  email: '',
  rating: '',
  comment: '',
  submitted: false,
}

export const FeedbackReducer = (state, action) => {

  switch(action.type){

    case 'UPDATE_TYPE':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'FORM_SUBMIT':
      return {
        ...intialState,
        submitted: true
      }
    case 'RESET_TYPE':
      return intialState;
    default:
      return state;
  }

}