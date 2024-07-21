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
    title: 'Chyper Bot | V2',
    image: 'assets/images/projects/comingsoon.webp',
    date: 'Coming Soon!',
    categories: 'Bot',
    description: 'There will be a Chyper v2 bot with more features waiting for you!',
    url: '#'
  },
  {
    title: 'Chyper Bot',
    image: 'assets/images/projects/nepgear.webp',
    date: '23 Juli 2024',
    categories: 'Bot',
    description:
        'Whatsapp bot that allows you to search for your favorite image, ai, & Convert Character with other useful features !!!',
    url: 'https://wa.link/loa8fu'
  }
];
