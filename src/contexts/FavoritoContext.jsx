import { createContext, useState, useContext } from "react";

const FavoriteImageContext = createContext();

export function FavoriteImagesProvider({children}) {
    const [favoriteImages, setFavoriteImages] = useState([]);

    const addFavs = (image) => {
        setFavoriteImages((prevFavoritas) => [...prevFavoritas, image]);
    }

    const removeFavs = (image) => {
        setFavoriteImages((prevFavoritas) => {
            return prevFavoritas.filter((fav) => fav.id !== image.id)
        })
    }

    return (
        <FavoriteImageContext.Provider value={{favoriteImages, addFavs, removeFavs}}>
            {children}
        </FavoriteImageContext.Provider>
    )
}

export function useFavImage(){
    return useContext(FavoriteImageContext);
}