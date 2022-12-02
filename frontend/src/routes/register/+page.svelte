<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Word nu lid!
	</h2>
	<p class="text-center mt-1">
		Of <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>login</a
		> als je al een account hebt.
	</p>
	<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<div class="form-control w-full max-w-md">
			<label for="username" class="label font-medium pb-1">
				<span class="label-text">Naam</span>
			</label>
			<input type="text" name="username" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Wachtwoord</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="passwordConfirm" class="label font-medium pb-1">
				<span class="label-text">Bevestig Wachtwoord</span>
			</label>
			<input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-md" />
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Registreer</button>
		</div>
	</form>
</div>