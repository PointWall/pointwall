export default function HambMenu (): JSX.Element {
  return (
    <div className='relative w-7 h-6'>
      <div className='absolute w-full h-[4px] bg-black top-0' />
      <div className='absolute w-full h-[4px] bg-black top-1/2 -translate-y-1/2' />
      <div className='absolute w-full h-[4px] bg-black bottom-0' />
    </div>
  )
}
