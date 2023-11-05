import { IsString, MinLength } from 'class-validator';

export class AuthenticateAdminUserRequest {
	@IsString()
	readonly email: string;

	@IsString()
	@MinLength(50)
	readonly password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}

	static create(email: string, password: string): AuthenticateAdminUserRequest {
		return new AuthenticateAdminUserRequest(email, password);
	}
}
