import Image from 'next/image'
import { Inter } from 'next/font/google'
import Clock from '../components/clock'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'
import { ClockIcon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['cyrillic-ext'] })
export default function Botttom() {
  return (
<div clas>
<div className='flex justify-between absolute inset-x-0     bottom-0'>
<div className='flex  outline  outline-zinc-800 outline-1.5 m-5 p-5 bg-opacity-100 gap-5 rounded-lg bg-zinc-900'>

<Clock />
</div>

<div className='flex outline  outline-zinc-800 outline-1.5 m-5 p-5 bg-opacity-100 gap-5 rounded-lg bg-zinc-900 text-blue-500' >
• Telegram: t.me/GG_wrks </div>

</div>

</div>

  )
}
