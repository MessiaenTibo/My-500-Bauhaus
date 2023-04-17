import Image from 'next/image'
import { Inter } from 'next/font/google'
import Action from '@/components/Action'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='p-4'>
      <div className='p-2'>
        <Action label='Add to list'/>
        <Action label='Add to list' style='secondary'/>
      </div>

      <div className='flex gap-2 mb-12'>
        <div className='w-16 h-16 bg-bauhaus-neutral-300'></div>
        <div className='w-16 h-16 bg-bauhaus-neutral-500'></div>
        <div className='w-16 h-16 bg-bauhaus-neutral-700'></div>
      </div>

      <div className='w-16 h-16 bg-bauhaus-primary-500'></div>

      <div className='mt-24'>
        <h1 className='text-black text-7xl font-reross'>Reross | 72 Headline</h1>
        <h2 className='text-bauhaus-primary-500 text-5xl font-reross'>Reross | 48 Headline Small</h2>
        <h3 className='text-black text-3xl font-reross'>Reross | 30 Subheadline</h3>

        <p className='text-lg font-semibold font-futura-pt'>Futura PT, 18 Demi Subheadline, highlighted text</p>
        <p className='font-semibold font-futura-pt'>
          Futura PT, 16 - Medium
          Text Default
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed dia. Hui ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
        </p>
        <p className='text-sm font-semibold font-futura-pt'>Futura PT, 14 – Medium
          Input field description, small running text, Timestamp</p>
      </div>
    </main>
  )
}
