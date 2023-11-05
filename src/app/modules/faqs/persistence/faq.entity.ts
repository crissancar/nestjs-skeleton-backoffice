import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TimestampEntity } from '../../shared/persistence/timestamp.entity';
import { FAQLanguages } from '../enums/faq-languages.enum';
import { faqsConfig } from '../faqs.config';

const { entity } = faqsConfig;

@Entity(entity)
export class FAQEntity extends TimestampEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		type: 'enum',
		enum: FAQLanguages,
		default: FAQLanguages.SPANISH,
	})
	language: FAQLanguages;

	@Column()
	title: string;

	@Column()
	text: string;
}
