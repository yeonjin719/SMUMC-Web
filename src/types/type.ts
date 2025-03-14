import { POSITION, Gender, PART } from '../enum/enum';
import { Skill } from '../constants/constants';
type SkillType = keyof typeof Skill;
export type TeamMember = {
    id: number;
    nickname: string;
    name: string;
    part: PART;
    github: string | null;
    skill: SkillType;
    year: number;
    position: POSITION;
    sex: Gender;
    project: string[] | null;
};
