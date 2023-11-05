import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampEntity } from '../../../shared/persistence/timestamp.entity';
import { blacklistsConfig } from '../../blacklists.config';

const { entity } = blacklistsConfig.ip;

@Entity(entity)
export class BlacklistIPEntity extends TimestampEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ unique: true })
	ip: string;
}
