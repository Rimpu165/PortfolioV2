export interface Skill {
  name: string;
  idx: string;
  color: string;
  featured?: boolean;
}

export const ROW1_SKILLS: Skill[] = [
  { name: 'MERN Stack', idx: '01', color: '#B600A8' },
  { name: 'React.js', idx: '02', color: '#00D8FF', featured: true },
  { name: 'Next.js', idx: '03', color: '#FFFFFF', featured: true },
  { name: 'Node.js', idx: '04', color: '#339933', featured: true },
  { name: 'Express.js', idx: '05', color: '#FFFFFF', featured: true },
  { name: 'MongoDB', idx: '06', color: '#47A248', featured: true },
];

export const ROW2_SKILLS: Skill[] = [
  { name: 'JavaScript', idx: '07', color: '#F7DF1E' },
  { name: 'HTML & CSS', idx: '08', color: '#E34F26' },
  { name: 'Tailwind CSS', idx: '09', color: '#38BDF8', featured: true },
  { name: 'Bootstrap', idx: '10', color: '#7952B3' },
  { name: 'Git', idx: '11', color: '#F05032' },
  { name: 'GitHub', idx: '12', color: '#FFFFFF' },
  { name: 'DevTools', idx: '13', color: '#00FF66' },
];

export const ALL_SKILLS = [...ROW1_SKILLS, ...ROW2_SKILLS];

export const FEATURED_SKILLS = ALL_SKILLS.filter(skill => skill.featured);
