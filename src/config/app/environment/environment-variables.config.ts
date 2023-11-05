import { BinaryLike, CipherCCMTypes, CipherKey, Encoding } from 'crypto';

export const environmentVariablesConfig = {
	bcrypt: {
		salt: null as number,
		pepper: null as string,
	},
	crypto: {
		algorithm: null as CipherCCMTypes,
		iv: null as BinaryLike,
		key: null as CipherKey,
		cipher: {
			input: {
				encoding: null as Encoding,
			},
			output: {
				encoding: null as Encoding,
			},
		},
		decipher: {
			input: {
				encoding: null as Encoding,
			},
			output: {
				encoding: null as Encoding,
			},
		},
	},
	logger: {
		level: null as string,
	},
	postgres: {
		database: {
			name: null as string,
			host: null as string,
			password: null as string,
			port: null as number,
			username: null as string,
		},
	},
	rancher: {
		env: null as string,
	},
	typeorm: {
		logging: null as boolean,
	},
};
