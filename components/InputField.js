import { useField } from "formik"

const InputField = ({label, className, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className="w-full relative">
            <label className="font-display text-sm text-gray-900 w-full">{label}</label>
            <div className="w-full">
                <input className={`font-display w-full text-gray-500 border-2 transition duration-500 focus:border-4 focus:border-green-500 border-gray-200 text-md focus:outline-none py-2 pl-2 rounded ${className}`} {...field} {...props}></input>
            </div>
            {meta.touched && meta.error && <p className="font-display absolute bottom-0 transform translate-y-full	 text-xs text-red-500 mt-1">{meta.error}</p>}
        </div>
    )
}

export default InputField
