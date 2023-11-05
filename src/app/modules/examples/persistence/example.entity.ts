import { Column, Entity, PrimaryColumn } from 'typeorm';

import { TimestampEntity } from '../../shared/persistence/timestamp.entity';
import { examplesConfig } from '../config/examples.config';

const { entity } = examplesConfig;

@Entity(entity)
export class ExampleEntity extends TimestampEntity {
	@PrimaryColumn()
	id: string;

	@Column({ unique: true })
	name: string;
}
