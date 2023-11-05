import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class TimestampEntity extends BaseEntity {
	@CreateDateColumn({
		type: 'timestamp',
		default: () => 'now()',
	})
	createdAt: Date;

	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'now()',
	})
	updatedAt: Date;
}
