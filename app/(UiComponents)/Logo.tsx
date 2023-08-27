import Image from 'next/image'
import React from 'react'

type Props = {}

function Logo({}: Props) {
  return (
    <div className='relative h-[18%] w-[25%]'>
        <Image src="/Logo.png" alt='Logo' fill className='object-contain' />
    </div>
  )
}

export default Logo