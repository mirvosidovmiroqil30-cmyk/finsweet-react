export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  img: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'javena-melo',
    name: 'Javena Melo',
    role: 'Support Assist',
    img: '/Company/assets/Team 1.png',
  },
  {
    slug: 'marcus-lee',
    name: 'Marcus Lee',
    role: 'Developer',
    img: '/Company/assets/Team 2.png',
  },
  {
    slug: 'sara-kim',
    name: 'Sara Kim',
    role: 'Designer',
    img: '/Company/assets/Team 3.png',
  },
  {
    slug: 'david-park',
    name: 'David Park',
    role: 'QA Engineer',
    img: '/Company/assets/Team 4.png',
  },
  {
    slug: 'emma-watson',
    name: 'Emma Watson',
    role: 'HR Manager',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    slug: 'james-brown',
    name: 'James Brown',
    role: 'DevOps',
    img: '/Company/assets/Team 6.png',
  },
  {
    slug: 'lily-chen',
    name: 'Lily Chen',
    role: 'Product Manager',
    img: '/Company/assets/Team 7.png',
  },
  {
    slug: 'ryan-smith',
    name: 'Ryan Smith',
    role: 'Consultant',
    img: '/Company/assets/Team 8.png',
  },
];
