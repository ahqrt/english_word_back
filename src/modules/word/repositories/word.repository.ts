import { SelectQueryBuilder } from 'typeorm';

import { BaseRepository } from '@/modules/database/base';
import { CustomRepository } from '@/modules/database/decorators';

import { WordEntity } from '../entities';

@CustomRepository(WordEntity)
export class WordRepository extends BaseRepository<WordEntity> {
    protected _qbName = 'word';

    buildBaseQB(): SelectQueryBuilder<WordEntity> {
        return this.createQueryBuilder('word');
    }
}
