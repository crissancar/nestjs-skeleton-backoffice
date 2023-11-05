import { Column, Entity, PrimaryColumn } from 'typeorm';

import { TimestampEntity } from '../../shared/persistence/timestamp.entity';
import { UserAudiences } from '../enums/user-audiences.enum';
import { usersConfig } from '../users.config';

const { entity } = usersConfig;

@Entity(entity)
export class UserEntity extends TimestampEntity {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({
		type: 'enum',
		enum: UserAudiences,
		array: true,
		default: [UserAudiences.GENERAL],
	})
	audiences: Array<UserAudiences>;
}
