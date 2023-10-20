import { Module, ModuleMetadata } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Configure } from '../config/configure';

import { DatabaseModule } from '../database/database.module';

import * as entities from './entities';
import * as repositories from './repositories';
import { WordRepository } from './repositories/word.repository';
import * as services from './services';
import { WordService } from './services/word.service';

@Module({})
export class WordModule {
    static async forRoot(configure: Configure) {
        const providers: ModuleMetadata['providers'] = [
            ...Object.values(services),
            {
                provide: WordService,
                inject: [repositories.WordRepository],
                useFactory(wordRepository: WordRepository) {
                    return new WordService(wordRepository);
                },
            },
        ];

        return {
            module: WordModule,
            imports: [
                TypeOrmModule.forFeature(Object.values(entities)),
                DatabaseModule.forRepository(Object.values(repositories)),
            ],
            providers,
            exports: [
                ...Object.values(services),
                WordService,
                DatabaseModule.forRepository(Object.values(repositories)),
            ],
        };
    }
}
