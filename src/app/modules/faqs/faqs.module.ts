import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FAQEntity } from './persistence/faq.entity';
import { FAQEntitySubscriber } from './persistence/faq-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([FAQEntity])],
	providers: [FAQEntitySubscriber],
})
export class FAQsModule {}
