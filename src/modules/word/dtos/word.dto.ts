import { IsNotEmpty } from 'class-validator';

import { DtoValidation } from '@/modules/core/decorators';

/**
 * 分类新增验证
 */
@DtoValidation({ groups: ['create'] })
export class CreateWordDto {
    @IsNotEmpty({ groups: ['create'], message: '单词名称不得为空' })
    word: string;

    @IsNotEmpty({ groups: ['create'], message: '例句名称不得为空' })
    sentence: string;

    @IsNotEmpty({ groups: ['create'], message: '美音名称不得为空' })
    usphone: string;

    @IsNotEmpty({ groups: ['create'], message: '英音名称不得为空' })
    ukphone: string;

    @IsNotEmpty({ groups: ['create'], message: '翻译名称不得为空' })
    trans: string;
}
