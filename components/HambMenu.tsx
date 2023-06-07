import Image from 'next/image'

export default function HambMenu ({ isOpen }: { isOpen: boolean }): JSX.Element {
  return (
    isOpen
      ? (
        <Image src='/icons/close-menu.svg' alt='close menu' width={30} height={30} />
        )
      : (
        <Image src='/icons/open-menu.svg' alt='open menu' width={30} height={30} />
        )
  )
}
