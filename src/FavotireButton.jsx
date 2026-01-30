import { useState, useEffect, memo } from 'react';

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log("Changed favorite status:", isFavorite);

    return () => {
      console.log("Cleanup favorite status change for:", isFavorite);
    }
  }, [isFavorite]);

  return (
    <div className="favorite-button cursor-pointer" onClick={() => setIsFavorite(!isFavorite)}>
    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </div>
  ) 
}

export default memo(FavoriteButton);