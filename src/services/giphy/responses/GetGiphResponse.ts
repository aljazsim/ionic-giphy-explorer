/* eslint-disable camelcase */
export interface Hd {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface FixedWidthStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedHeightDownsampled {
    height: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface PreviewGif {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface Preview {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface FixedHeightSmall {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface Downsized {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedWidthDownsampled {
    height: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface FixedWidth {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface DownsizedStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface DownsizedMedium {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface OriginalMp4 {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface DownsizedLarge {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface PreviewWebp {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface Original {
    frames: string;
    hash: string;
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface OriginalStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedHeightSmallStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedWidthSmall {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface Looping {
    mp4: string;
    mp4_size: string;
}

export interface DownsizedSmall {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface FixedWidthSmallStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedHeightStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface FixedHeight {
    height: string;
    mp4: string;
    mp4_size: string;
    size: string;
    url: string;
    webp: string;
    webp_size: string;
    width: string;
}

export interface _480wStill {
    url: string;
    width: string;
    height: string;
}

export interface Images {
    hd: Hd;
    fixed_width_still: FixedWidthStill;
    fixed_height_downsampled: FixedHeightDownsampled;
    preview_gif: PreviewGif;
    preview: Preview;
    fixed_height_small: FixedHeightSmall;
    downsized: Downsized;
    fixed_width_downsampled: FixedWidthDownsampled;
    fixed_width: FixedWidth;
    downsized_still: DownsizedStill;
    downsized_medium: DownsizedMedium;
    original_mp4: OriginalMp4;
    downsized_large: DownsizedLarge;
    preview_webp: PreviewWebp;
    original: Original;
    original_still: OriginalStill;
    fixed_height_small_still: FixedHeightSmallStill;
    fixed_width_small: FixedWidthSmall;
    looping: Looping;
    downsized_small: DownsizedSmall;
    fixed_width_small_still: FixedWidthSmallStill;
    fixed_height_still: FixedHeightStill;
    fixed_height: FixedHeight;
    "480w_still": _480wStill;
}

export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    is_verified: boolean;
    website_url: string;
    instagram_url: string;
}

export interface Onload {
    url: string;
}

export interface Onclick {
    url: string;
}

export interface Onsent {
    url: string;
}

export interface Onstart {
    url: string;
}

export interface Analytics {
    onload: Onload;
    onclick: Onclick;
    onsent: Onsent;
    onstart: Onstart;
}

export interface Data {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    user: User;
    analytics: Analytics;
    analytics_response_payload: string;
}

export interface Meta {
    msg: string;
    status: number;
    response_id: string;
}

export interface GetGiphResponse {
    data: Data;
    meta: Meta;
}
