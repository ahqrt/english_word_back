export type SearchType = 'like' | 'against' | 'meilli';
export interface WordConfig {
    searchType?: SearchType;
    htmlEnabled: boolean;
}
