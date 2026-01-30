import { useState } from 'react'
import { useDebounce } from './hooks/useDebounce.js'
import { MovieCard } from './MovieCard.jsx'
import { MOVIES } from './movies.data.js'
import { useTheme } from './hooks/useTheme.js'



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { theme, toggleTheme } = useTheme();

  const movies = MOVIES.filter(movie => movie.title.toLowerCase().includes(debouncedSearch.toLowerCase()));

  return (
    <div className={`min-h-fill w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} px-6 py-4`}>
      <header className="mb-10 flex items-center justify-between">
        <img src="/vite.svg" alt="" />
        <div>
          <input type="search" placeholder="Search movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className=' border-white border-2 rounded-lg p-2'/>
          <button onClick={() => toggleTheme()} className='text-sm px-3 py-1 rounded border border-white/20 dark:border-white/20 hover:bg-white hover:text-black dark:hover:bg-white/10 w-30 mx-4 transition'>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </header>
      <main className='flex gap-6 flex-wrap'>
        {
          (movies.length) ? (
            movies.map(movie => (
              <MovieCard 
                key={movie.id}
                image={movie.image}
                rating={movie.rating}
                title={movie.title}
                trailerVideoId={movie.trailerVideoId}
              />
            ))
           ) : (
            <p>No movies found.</p>
          )
          
        }
        
      </main>
    </div>
  )
}

export default App
