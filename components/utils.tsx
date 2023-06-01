interface TitleProps {
  children: string
}

export function Title ({ children }: TitleProps): JSX.Element {
  return (
    <h1 className='text-4xl md:text-8xl mt-16'>
      {children}
    </h1>
  )
}

interface WrapperProps {
  children: JSX.Element | JSX.Element[]
}

export function Wrapper ({ children }: WrapperProps): JSX.Element {
  return (
    <div className='mx-[min(10%,40ch)]'>
      {children}
    </div>
  )
}
