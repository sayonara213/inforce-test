import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: '1006',
      entities: ['dist/**/*.entity{.js,.ts}'],
      migrationsTableName: 'typeorm_migrations',
      migrations: ['src/migration/*.ts'],
      logger: 'file',
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
