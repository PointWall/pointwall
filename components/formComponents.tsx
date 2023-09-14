import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface InputTextProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
}

interface InputImageProps {
  name: string
  label?: string
  required?: boolean
  multiple?: boolean
}

export function TextInput (props: InputTextProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <input type='text' id={props.name} name={props.name} placeholder={props.placeholder} className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none focus:border-slate-400 focus:bg-slate-100' />
    </div>
  )
}

export function PasswordInput (props: InputTextProps): JSX.Element {
  const [textVisible, setTextVisible] = useState(false)

  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <span className='relative block w-full max-w-lg'>
        <input type={textVisible ? 'text' : 'password'} id={props.name} name={props.name} placeholder={props.placeholder} className='border-b-2 w-full bg-slate-50 px-[.5em] py-[.25em] outline-none focus:border-slate-400 focus:bg-slate-100' />
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
      <textarea id={props.name} name={props.name} placeholder={props.placeholder} className='w-full max-w-lg border-b-2 bg-slate-50 px-[.5em] py-[.25em] outline-none min-h-[120px] max-h-[280px] focus:border-slate-400 focus:bg-slate-100' />
    </div>
  )
}

export function ImageInput (props: InputImageProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <input type='file' accept='image/*' required={props.required} multiple={props.multiple} />
    </div>
  )
}
