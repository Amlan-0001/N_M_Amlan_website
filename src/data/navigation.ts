export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'leadership', label: 'Leadership', href: '#leadership' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
