export type ChannelResponse = {
  brandingSettings: {
    channel: {
      country: string;
      description: string;
      keywords: string;
      title: string;
      unsubscribedTrailer: string;
    };
    image: { bannerExternalUrl: string };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  id: string;
  kind: string;
  snippet: {
    country: string;
    customUrl: string;
    description: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    thumbnails: {
      default: { height: number; url: string; width: number };
      high: { height: number; url: string; width: number };
      medium: { height: number; url: string; width: number };
    };
    title: string;
  };
  statistics: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
};
