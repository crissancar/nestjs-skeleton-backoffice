import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PolicyEntity } from './persistence/policy.entity';
import { PolicyEntitySubscriber } from './persistence/policy-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([PolicyEntity])],
	providers: [PolicyEntitySubscriber],
})
export class PoliciesModule {}
