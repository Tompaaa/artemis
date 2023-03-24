import Discord from '../../commons/discord';
import { Api, Gamble } from '../../commons/tools';

const getQuote = async () => {
    const quotes = await Api.get<string[]>('speech/quotes');

    return quotes[Gamble.randomIndex(quotes)];
};

export default async () => {
    const quote = await getQuote();

    if (!quote) return 'No quote';

    const [name, value] = quote.split('\n');

    return Discord.buildEmbed({
        title: 'Quote of the Week',
        fields: { name, value }
    });
};
