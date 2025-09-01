import { CustomHeader } from './shared/components/CustomHeader';
import { GifList } from './gifs/components/GifList';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { useGifs } from './gifs/hooks/useGifs';

export const GiffsApp = () => {
    const { gifs, previousTerms, handleTermClick, handleSearch } = useGifs();
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto'></CustomHeader>
            {/* Search */}
            <SearchBar placeholder='Buscar gifs' onQuery={handleSearch} ></SearchBar>
            {/* History */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClick}></PreviousSearches>
            {/* gifs-container */}
            <GifList gifs={gifs}></GifList>
        </>
    )
}
