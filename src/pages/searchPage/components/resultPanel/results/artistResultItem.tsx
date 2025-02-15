import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ListItem from '@/components/base/listItem';
import {ImgAsset} from '@/constants/assetsConst';
import {ROUTE_PATH} from '@/entry/router';

interface IArtistResultsProps {
    item: IArtist.IArtistItem;
    index: number;
    pluginHash: string;
}
export default function ArtistResultItem(props: IArtistResultsProps) {
    const {item: artistItem, pluginHash} = props;
    const navigation = useNavigation<any>();
    return (
        <ListItem
            left={{
                artwork: artistItem.avatar,
                fallback: ImgAsset.albumDefault,
            }}
            title={artistItem.name}
            desc={
                artistItem.desc
                    ? artistItem.desc
                    : `${artistItem.worksNum}个作品    ${
                          artistItem.description ?? ''
                      }`
            }
            tag={artistItem.platform}
            onPress={() => {
                navigation.navigate(ROUTE_PATH.ARTIST_DETAIL, {
                    artistItem: artistItem,
                    pluginHash,
                });
            }}
        />
    );
}
