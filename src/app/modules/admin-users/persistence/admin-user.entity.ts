import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampEntity } from '../../shared/persistence/timestamp.entity';
import { Bcrypt } from '../../shared/services/bcrypt.service';
import { adminUsersConfig } from '../admin-users.config';
import { AdminUserAudiences } from '../enums/admin-user-audiences.enum';

const { entity } = adminUsersConfig;

@Entity(entity)
export class AdminUserEntity extends TimestampEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({
		type: 'enum',
		enum: AdminUserAudiences,
		default: AdminUserAudiences.GENERAL,
	})
	audience: AdminUserAudiences;

	static comparePasswords(password: string, hashedPassword: string): boolean {
		return Bcrypt.compare(password, hashedPassword);
	}
}
