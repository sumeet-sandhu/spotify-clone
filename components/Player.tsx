"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    return ( 
        <div
            className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4
            "
        >
            <PlayerContent
                key={songUrl} // We use key here because whenever key is used then on any change it destroys the whole component and re-renders it again. This will be helpful as everytime a user changes the song, the player will be destroyed before next song is played (loaded or rendered).
                song={song}
                songUrl={songUrl}
            />
        </div>
     );
}
 
export default Player;