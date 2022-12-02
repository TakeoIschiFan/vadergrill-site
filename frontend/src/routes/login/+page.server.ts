import { loginUserDto } from "$lib/schemas";
import type { LoginActionData } from "$lib/types";
import { validateData } from "$lib/utils";
import { invalid, redirect } from "@sveltejs/kit";
import type { ClientResponseError } from "pocketbase";
import type { Actions } from "./$types";

export const actions: Actions = {
	login: async ({ request, locals }): Promise<LoginActionData> => {
		const { formData, errors } = await validateData(await request.formData(), loginUserDto);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			const e = err as ClientResponseError;

			const { password, ...rest } = formData;

			return {
				data: rest,
				invalidCredentials: true
			};
		}
		throw redirect(303, '/');
	}
};