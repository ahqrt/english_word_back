import { Injectable } from '@nestjs/common';

import { BaseService } from '@/modules/database/base';

import { PaginateDto } from '@/modules/restful/dtos';

import { CreateWordDto } from '../dtos/word.dto';
import { WordEntity } from '../entities';
import { WordRepository } from '../repositories';

@Injectable()
export class WordService extends BaseService<WordEntity, WordRepository> {
    protected enableTrash: boolean = false;

    constructor(protected readonly repository: WordRepository) {
        super(repository);
    }

    async paginate(options?: PaginateDto) {
        return super.paginate({ ...options });
    }

    async addWord(createInfo: CreateWordDto) {
        const word = this.repository.create(createInfo);
        return this.repository.save(word);
    }
}
