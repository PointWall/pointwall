import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface InputProps {
  name: string
  label?: string
  required?: boolean
  className?: string
}

interface InputTextProps extends InputProps {
  placeholder?: string
}

interface InputImageProps extends InputProps {
  multiple?: boolean
}

interface InputRadioProps extends InputProps {
  options: string[]
}

export function TextInput (props: InputTextProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <input type='text' id={props.name} name={props.name} placeholder={props.placeholder} className={props.className} />
    </div>
  )
}

export function PasswordInput (props: InputTextProps): JSX.Element {
  const [textVisible, setTextVisible] = useState(false)

  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <span className='relative block w-full max-w-lg'>
        <input type={textVisible ? 'text' : 'password'} id={props.name} name={props.name} placeholder={props.placeholder} className={props.className} />
        <button onClick={() => setTextVisible(prev => !prev)} className='absolute outline-none right-2 top-1/2 -translate-y-1/2'>
          <FontAwesomeIcon icon={textVisible ? faEyeSlash : faEye} />
        </button>
      </span>
    </div>
  )
}

export function TextareaInput (props: InputTextProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <textarea id={props.name} name={props.name} placeholder={props.placeholder} className={props.className} />
    </div>
  )
}

export function ImageInput (props: InputImageProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className={props.className}>{props.label}</label>}
      <input id={props.name} type='file' accept='image/*' name={props.name} required={props.required} multiple={props.multiple} />
    </div>
  )
}

export function CheckboxInput (props: InputProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className={props.className}>{props.label}</label>}
      <input id={props.name} type='checkbox' name={props.name} required={props.required} />
    </div>
  )
}

export function RadioInputs (props: InputRadioProps): JSX.Element {
  return (
    <div className={props.className}>
      {props.options.map((option) => (
        <div key={option} className='flex items-center gap-1'>
          <input type='radio' id={option} name={props.name} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>))}
    </div>
  )
}
