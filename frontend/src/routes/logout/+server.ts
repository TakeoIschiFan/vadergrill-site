import type { UsersResponse } from '$lib/types';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const DefaultUser: UsersResponse = <UsersResponse>{};

export const POST: RequestHandler = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = DefaultUser;

	throw redirect(303, '/');
};