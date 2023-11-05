import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExampleEntity } from './persistence/example.entity';
import { ExampleEntitySubscriber } from './persistence/example-entity.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([ExampleEntity])],
	providers: [ExampleEntitySubscriber],
})
export class ExamplesModule {}
