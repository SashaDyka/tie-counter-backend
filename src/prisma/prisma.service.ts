import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaServise extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
}