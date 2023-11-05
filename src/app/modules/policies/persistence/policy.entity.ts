import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampEntity } from '../../shared/persistence/timestamp.entity';
import { PolicyLanguages } from '../enums/policy-languages.enum';
import { PolicyTypes } from '../enums/policy-types.enum';
import { policiesConfig } from '../policies.config';

const { entity } = policiesConfig;

@Entity(entity)
export class PolicyEntity extends TimestampEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column({ default: 'Default policy description' })
	description: string;

	@Column({
		type: 'enum',
		enum: PolicyTypes,
	})
	type: PolicyTypes;

	@Column({
		type: 'enum',
		enum: PolicyLanguages,
	})
	language: PolicyLanguages;
}
