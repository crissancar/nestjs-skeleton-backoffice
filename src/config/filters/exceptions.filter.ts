import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

import { ValidationException } from '../../app/modules/shared/exceptions/validation.exception';
import { LoggerFactory } from '../../app/modules/shared/services/logger-factory.service';

const logger = LoggerFactory.create('ExceptionsFilter');

enum ExceptionMessages {
	INTERNAL_SERVER_ERROR = 'Internal server error',
	VALIDATION_ERROR = 'DTO validation error',
}

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();

		if (!(exception instanceof HttpException)) {
			this.modelInternalServerError(exception, response);

			return;
		}

		this.modelHttpException(exception, response);
	}

	private modelInternalServerError(exception: unknown, response: Response) {
		const status = HttpStatus.INTERNAL_SERVER_ERROR;
		const message = ExceptionMessages.INTERNAL_SERVER_ERROR;

		logger.error(exception);

		this.createResponse(status, message, response);
	}

	private modelHttpException(exception: HttpException, response: Response) {
		const status = exception.getStatus();
		const message = exception.getResponse() as string;
		const loggerMessage = `${status}, ${message}`;

		if (exception instanceof ValidationException) {
			const loggerMessage = `${status}, ${ExceptionMessages.VALIDATION_ERROR}: [${message}]`;

			logger.error(loggerMessage);

			this.createResponse(status, message, response);

			return;
		}

		logger.error(loggerMessage);

		this.createResponse(status, message, response);
	}

	private createResponse(status: number, message: string, response: Response) {
		response.status(status).json({
			status,
			message,
		});
	}
}
