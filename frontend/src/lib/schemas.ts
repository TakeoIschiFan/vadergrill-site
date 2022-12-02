import { z } from 'zod';
import { zfd } from 'zod-form-data';


export const loginUserDto = z.object({
	email: z
		.string({ required_error: 'Email moet ingevuld zijn' })
		.email({ message: 'Email moet een correcte email zijn.' }),
	password: z.string({ required_error: 'Wachtwoord moet ingevuld zijn' })
});