import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
    return (
        <div className='flex dark:bg-gray-700 bg-slate-300 p-4 lg:text-lg justify-center gap-6'>
            <NavbarItem title="Trending" params="fetchTrending"
            />
            <NavbarItem title="Top Rated" params="fetchTopRated" />
        </div>
    )
}
