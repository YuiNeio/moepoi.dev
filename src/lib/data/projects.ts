export interface Project {
  title: string;
  image: string;
  date: string;
  categories: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Nepgear Bot',
    image: 'assets/images/projects/nepgear.webp',
    date: '23 November 2018',
    categories: 'Bot',
    description:
        'Telegram bot that allows you to search for your favorite Anime, Manga, Character with other useful features !!!',
    url: 'https://t.me/NepgearBot'
  }
];
