import {debounce} from "throttle-debounce";
import {TRIPS_LIST_KEY} from "../constants/trip";
import Fuse from "fuse.js";
import {useQueryClient} from "react-query";
import {useContext} from "react";
import {SearchTextFilterContext} from "../context/SearchContext";

export const useSearchTrips = (props: any) => {
    //@ts-ignore
    const {setSearchText} = useContext(SearchTextFilterContext);

    const queryClient = useQueryClient();

    const searchData = debounce(0, (pattern: any) => {
        if (!pattern) {
            queryClient.invalidateQueries(TRIPS_LIST_KEY);
            setSearchText('');
            return;
        } else {
            setSearchText(pattern);
        }

        const fuse = new Fuse(props.data, {
            keys: ['title'],
        });

        const result = fuse.search(pattern);
        const matches:any = [];
        if (!result.length) {
            queryClient.setQueryData([TRIPS_LIST_KEY], matches);
        } else {

            result.forEach(({item}) => {
                matches.push(item);
            });
            queryClient.setQueryData([TRIPS_LIST_KEY], matches);
        }
    });

    return {searchData}
}