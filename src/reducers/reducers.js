const songsReducer = () => {

    return [
        {title: 'no scrubs', duration: '3:05'},
        {title: 'macarena', duration: '4:25'},
        {title: 'No diggity', duration: '3:00'},
        {title: 'I want it that way', duration: '1:25'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
}

