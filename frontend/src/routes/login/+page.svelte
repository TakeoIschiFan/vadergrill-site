<script lang="ts">
	import type { ActionData } from "./$types";
	export let form: ActionData;
</script>

<div
	class="flex flex-col items-center h-full w-full pt-12 maxwidth min-h-screen"
>
	<div class="w-24 mb-10 text-primary">
		<img src="/vadergrill.svg" alt="vader grill logo" class="w-24" />
	</div>
	<h2 class="text-center text-3xl font-bold tracking-tight text-base-content">
		Login in bij Vader Grill
	</h2>
	{#if form?.invalidCredentials}
		<div
			class="alert alert-error shadow-lg w-full max-w-md my-2 text-center"
		>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					width="94.926px"
					height="94.926px"
					viewBox="0 0 94.926 94.926"
					class="stroke-current flex-shrink-0 h-8 w-8 mx-auto"
					style="enable-background:new 0 0 94.926 94.926; color: rgb(220,38,38);"
					xml:space="preserve"
				>
					<g>
						<path
							d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0   c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096   c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476   c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62   s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
							fill="currentcolor"
						/>
					</g>
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
					<g />
				</svg>
				<span class="font-bold text-red-600">Invalid credentials.</span>
			</div>
		</div>
	{/if}
	<p class="text-center mt-1">
		Of <a
			href="/register"
			class="text-primary underline hover:text-red-600 font-medium hover:cursor-pointer"
			>registreer</a
		> als u nog geen account hebt.
	</p>
	<form
		method="POST"
		action="?/login"
		class="flex flex-col items-center gap-4 space-y-2 w-full mt-4"
	>
		<div class="form-control w-full max-w-md text-center">
			<input
				type="email"
				name="email"
				class="input input-bordered w-2/3 max-w-md text-black rounded-lg p-1"
				value={form?.data?.email ?? ""}
				placeholder="e-mail@example.com"
			/>
		</div>
		<div class="form-control w-full max-w-md text-center">
			<input
				type="password"
				name="password"
				placeholder="password"
				class="input text-black input-bordered w-2/3 max-w-md rounded-lg p-1"
			/>
		</div>
		<div class="w-full max-w-md text-center">
			<a
				href="/reset-password"
				class="hover:cursor-pointer underline hover:text-red-600 font-bold"
			>
				Forgot Password?
			</a>
		</div>
		<div class="pt-3 pb-2 max-w-md text-center">
			<button
				class="bg-red-600 w-36 hover:opacity-80 loginbtn rounded-lg font-bold text-xl shadow-lg p-1"
				>Login</button
			>
		</div>
		{#if form?.notVerified}
			<div class="alert alert-error shadow-lg w-full max-w-md ">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span
						>You must verify your email address before you can
						login.</span
					>
				</div>
			</div>
		{/if}
	</form>
</div>

<style>
	.loginbtn {
		transition: 400ms;
	}
	.loginbtn:hover {
		transform: scale(1.05);
	}
</style>
