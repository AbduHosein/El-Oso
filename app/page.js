import Image from 'next/image';
import data from '../data.json';

export default function Home() {
  return (
    <div className='flex item-center mx-auto w-full'>
      <Image 
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}>
      </Image>
    </div>
  )
}
