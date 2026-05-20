import 'react'

export default function CatCart({name,img}) {
  return (
    <div className='w-37.5 h-full '>
      <img src={img} alt={name} className=' h-22.5 ' />
      <h1 className='text-center text-sm font-medium'>{name}</h1>
    </div>
  )
}
