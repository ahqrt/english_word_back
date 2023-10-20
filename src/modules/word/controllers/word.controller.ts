import { Controller, Get, Query } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { Depends } from '@/modules/restful/decorators';
import { PaginateDto } from '@/modules/restful/dtos';

import { WordService } from '../services';
import { WordModule } from '../word.module';

@ApiTags('单词')
@Depends(WordModule)
@Controller('words')
export class WordController {
    constructor(protected service: WordService) {}

    @Get()
    async list(@Query() query: PaginateDto) {
        return this.service.paginate(query);
    }
}
