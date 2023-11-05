import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampEntity } from '../../../shared/persistence/timestamp.entity';

@Entity({ name: 'blacklist_user' })
export class BlacklistUserEntity extends TimestampEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	reason: string;

	@Column({ unique: true })
	userId: string;
}
