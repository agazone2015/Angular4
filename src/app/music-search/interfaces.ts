    export interface Album{
        id: string;
        name: string;
        images: AlbumImages[]
        artists: AlbumArtist[]
    }
   

    export interface AlbumImages{
        height: number;
        width: number;
        url: string;
    }

    export interface AlbumArtist{
        id: string;
        name: string;
    }      