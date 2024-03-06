import Image from 'next/image';
import Link from 'next/link';
import { IoMdThumbsUp } from "react-icons/io";

export default function Card({ result }) {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-500 sm:shadow-md rounded-lg sm:border sm:border-slate-500 sm:m-2 transition-shadow duration-200'>

            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
                        }`}
                    alt={result.title || result.name}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 object-cover'
                ></Image>

                <div className='p-5'>
                    <h2 className='text-lg font-bold truncate'>
                        {result.title || result.name}
                    </h2>
                    <p className='flex items-center'>
                        {result.release_date || result.first_air_date}
                        <IoMdThumbsUp className='h-5 mr-1 ml-6 text-emerald-800' />
                        {result.vote_count}
                    </p>

                    <p className='line-clamp-3 text-md'>{result.overview}</p>
                </div>
            </Link>
        </div>
    );
}