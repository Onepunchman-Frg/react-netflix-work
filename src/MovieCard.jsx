import FavoriteButton from './FavotireButton.jsx';
import { useState } from 'react';
import { Modal } from './components/ui/Modal.jsx';

export function MovieCard({image, rating, title, trailerVideoId}) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);

  return (
    <div className="p-6 text-left border-white border-2 rounded-lg w-72">
        <img src={image} alt={title} width={300} className="rounded-lg" />
        <h2 className="my-1">{title}</h2>
        <p>Rating: {rating}</p>
        <FavoriteButton/>
        <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition" onClick={() => setIsOpenTrailer(!isOpenTrailer)}>Watch Trailer

        {isOpenTrailer && <Modal isOpen={isOpenTrailer} onClose={() => setIsOpenTrailer(false)}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerVideoId}?`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal>}

        </button>
    </div>
  )
}