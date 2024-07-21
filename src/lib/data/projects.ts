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
    title: 'Frontier of Hell',
    image: 'assets/images/projects/frontier-of-hell.webp',
    date: '6 October 2023',
    categories: 'Game',
    description: 'Frontier of Hell is a tower defense game that requires players to protect the base from enemy attacks at each stage.',
    url: 'https://github.com/moepoi/Frontier-of-Hell'
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
