import { AdminUserEntity } from '../persistence/admin-user.entity';

export interface AdminUserRepository {
	findByEmail(email: string): Promise<AdminUserEntity>;
}
