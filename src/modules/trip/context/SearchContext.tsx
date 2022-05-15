import {createContext, Dispatch, SetStateAction, useState} from 'react';

type SearchTextContext = {
    searchText?: string | undefined;
    setSearchText: Dispatch<SetStateAction<string>>;
}

export const SearchTextFilterContext = createContext<SearchTextContext | null>(null);

export function SearchTextFilterProvider({children}: any) {
    const [searchText, setSearchText] = useState('');

    return (
        <SearchTextFilterContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchTextFilterContext.Provider>
    );
}