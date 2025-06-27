import useForm from "./hooks/useForm"

const FormPage = () => {

  const [formState, onInputChange, resetForm] = useForm({
    name: '',
    email: '',
    subscribe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted: ',formState);
    resetForm();
  }

  return (
    <div className="flex flex-col">

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 box-border border-2 mt-10 mx-auto">
        <h2 className="font-semibold text-2xl mb-3">Customer Form:</h2>

        <input type="text" name="name" className="border-b-2 p-1 text-sm text-gray-600" value={formState.name} onChange={onInputChange}  placeholder="Enter name..."/>
        <input type="text" name="email" className="border-b-2 p-1 text-sm text-gray-600" value={formState.email} onChange={onInputChange}  placeholder="Enter email..."/>
        <div className="flex">
          <label htmlFor="checkbox">
            <input type="checkbox" className="border-b-2 text-gray-100" name="subscribe" id="subscribe" value={formState.subscribed} onChange={onInputChange} />
            <span className="text-sm text-gray-500 ml-2">Subscribe to newsletter</span>
          </label>
        </div>

        <div className="flex gap-3">
          <button className="p-2 bg-green-400 font-semibold hover:bg-green-500 text-white rounded-xl">Subscribe</button>
          <button className="p-2 bg-orange-400 font-semibold hover:bg-orange-500 text-white rounded-xl" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default FormPage