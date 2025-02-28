import { BaseItem } from './base-item';
import { User } from './user';
import { ItemTag } from './itemtag';
import { Review } from './review';

export interface House extends BaseItem {
    type: string;
    chambres: number;
    sallesdebain: number;
    surface: number;
    adresse: string;
    ville: string;
    district: string;
    ajardin: boolean;
    agarage: boolean;
    apiscine: boolean;
    anneeconstruction: boolean;
} 