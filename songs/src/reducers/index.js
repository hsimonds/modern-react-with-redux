import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'The Way of Vikings', duration: '4:05'},
        { title: 'Guardians of Asgaard', duration: '2:30'},
        { title: 'Crack the Sky', duration: '3:15'},
        { title: 'Shield Wall', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

});
