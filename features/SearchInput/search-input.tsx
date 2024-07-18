import Image from 'next/image';
import React from 'react'

type Props = {}

export const SearchInput = (props: Props) => {
  return (
    <div className="relative">
      <input
        className="py-4 pr-3 pl-7 w-56 h-7 border border-border rounded outline-none focus:w-96 focus:border-blue transition-all duration-300"
        placeholder='Search'
        type="text"
      />
      <Image
        className="absolute top-2.5 left-2"
        src="/search.svg"
        alt="search"
        width={16}
        height={16}
      />
    </div>
  );
}