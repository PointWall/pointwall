import { ChangeEventHandler, useState } from 'react'
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
  defaultValue?: string
}

interface InputImageProps extends InputProps {
  multiple?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

interface InputRadioOptions {
  defaultChecked?: boolean
  value: string
}

interface InputRadioProps extends InputProps {
  options: InputRadioOptions[]
}

export function TextInput (props: InputTextProps): JSX.Element {
  return (
    <div>
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <input type='text' id={props.name} name={props.name} placeholder={props.placeholder} defaultValue={props.defaultValue} className={props.className} />
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
      {props.label !== undefined && <label htmlFor={props.name} className='w-fit block font-light text-sm mb-1'>{props.label}</label>}
      <input id={props.name} type='file' accept='image/*' name={props.name} required={props.required} multiple={props.multiple} onChange={props.onChange} className={props.className} />
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
  if (props.options.filter(({ defaultChecked }) => defaultChecked !== undefined && defaultChecked).length > 1) {
    throw Error('Only one default value can be set')
  }

  return (
    <div className={props.className}>
      {props.options.map(({ value, defaultChecked }) => (
        <div key={value} className='flex items-center gap-1'>
          <input type='radio' id={value} name={props.name} value={value} defaultChecked={defaultChecked} />
          <label htmlFor={value}>{value}</label>
        </div>))}
    </div>
  )
}
