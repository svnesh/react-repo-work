import { useReducer, useState } from "react"
import { intialState, FeedbackReducer } from "../reducers/FeedbackReducer";
import {useTheme} from '../ThemeContext';

const FeedbackPage = () => {

  const {theme, toggleTheme} = useTheme();

  const [isValid, setIsValid] = useState(true);
  const [state, dispatch] = useReducer(FeedbackReducer, intialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_TYPE',
      field: e.target.name,
      value: e.target.value,
    })
  }
  const validateForm = () => {
    if(state.name === '' || state.email === ''){
      setIsValid(false);
    } 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    dispatch({type: 'FORM_SUBMIT'})
    console.log('Form submit', {...state, submitted: true});
  }

  return (
    <div className="flex flex-col p-4 max-w-md mx-auto">
      <h1 className="flex text-3xl font-bold">Feedback form</h1>
      <button className="p-2 bg-blue-500 text-white rounded flex-row w-40 mt-5" onClick={toggleTheme}>MyTheme {theme === 'light' ? "Dark" : "Light"}</button>
      <form className="flex flex-col mt-10 gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="name">Name: </label>
          <input type="text" className="border-b-1 p-1 border-b-gray-300 outline-0" name="name" value={state.name} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="email">Email:</label>
          <input type="text" className="border-b-1 p-1 border-b-gray-300 outline-0" name="email" value={state.email} onChange={handleChange}/>
        </div>

        <div className="flex gap-5">
          <label className="text-sm font-medium" htmlFor="rating">Rating:</label>
          <select name="rating" className="text-sm" value={state.rating} onChange={handleChange}>
            {
              [1,2,3,4,5].map((item, idx) => (
                <option key={idx} value={item}>{item}</option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="comment" className="text-sm font-medium">Comment:</label>
          <textarea name="comment" className="text-sm border-1 p-1 border-b-gray-100 outline-0" id="comment" value={state.comment} onChange={handleChange}></textarea>
        </div>
        <div className="flex gap-3 items-center">
          <button className="border-gray-300 border-1 w-30 h-10 mt-2 rounded-2xl bg-gray-200 cursor-pointer">Submit</button>
          {
            isValid 
            ? 
              <span className={!state.submitted ? 'hidden' : 'block text-sm text-green-500'}>Form submitted successfully!</span>
            :
              <span className={!state.submitted ? 'hidden' : 'block text-sm text-red-500'}>Form is not valid</span>
          }
        </div>
      </form>
      

    </div>
  )
}

export default FeedbackPage