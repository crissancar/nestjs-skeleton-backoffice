import { IsString } from 'class-validator';

export class FindAdminUserRequest {
	@IsString()
	readonly email: string;

	constructor(email: string) {
		this.email = email;
	}

	static create(email: string): FindAdminUserRequest {
		return new FindAdminUserRequest(email);
	}
}
