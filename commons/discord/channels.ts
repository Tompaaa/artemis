import { Guild, TextChannel } from 'discord.js';

export default async ({ channels, systemChannel }: Guild, channelId: string) => {
    const channel = await channels.fetch(channelId);

    return channel instanceof TextChannel ? channel : systemChannel;
};
