import { Exclude, Expose } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Exclude()
@Entity('word')
export class WordEntity extends BaseEntity {
    @Expose()
    @PrimaryColumn({ type: 'varchar', generated: 'uuid', length: 36 })
    id: string;

    @Expose()
    @Column({ comment: '单词' })
    word: string;

    @Expose()
    @Column({ comment: '例句' })
    sentence: string;

    @Expose()
    @Column({ comment: '美音' })
    usphone: string;

    @Expose()
    @Column({ comment: '英音' })
    ukphone: string;

    @Expose()
    @Column({ comment: '翻译' })
    trans: string;
}
