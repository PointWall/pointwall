export default function YoutubeEmbed ({ embedId }: { embedId: string }): JSX.Element {
  return (
    <div className='w-full h-full relative'>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
        className='w-full h-full'
      />
    </div>
  )
}
