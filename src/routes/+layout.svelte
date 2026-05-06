<script>
import { page } from "$app/state";
import { Collapse, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, Styles } from "@sveltestrap/sveltestrap";
import SocialMedia from "$components/SocialMedia.svelte";
import { MY_NAME, NAVBAR_CATEGORIES, SOCIAL_MEDIA } from "$lib/config";

let { children } = $props();

let title = $state("");
$effect(() => {
	const nav = page.url.pathname.split("/")[1];
	if (!nav) {
		title = "";
	} else {
		title = nav[0].toUpperCase() + nav.slice(1) + " — ";
	}
});
</script>

<Styles />

<svelte:head>
	<title>{title}{MY_NAME}</title>
</svelte:head>

<Navbar container expand="md" class="py-3" style="border-bottom: 2px solid #0d7b6e;">
	<div class="navbar-brand">
		<NavbarBrand style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--ink);">
			{MY_NAME}
		</NavbarBrand>
	</div>
	<Collapse navbar expand="md" isOpen>
		<Nav class="ms-auto">
			<div class="nav">
				{#each NAVBAR_CATEGORIES as category, i}
					{@const label = category[0].toUpperCase() + category.slice(1)}
					{@const url = i === 0 ? "/" : `/${category}`}
					{@const path = page.url.pathname}
					{@const disabled = i === 0 ? path === "/" : path === url || path === `${url}/`}
					<div class="nav-item">
						<NavItem>
							<NavLink href={url} {disabled} style="font-size: 0.9rem; font-weight: 500;">
								{label}
							</NavLink>
						</NavItem>
					</div>
				{/each}
			</div>
		</Nav>
	</Collapse>
</Navbar>

<Container md class="mb-5">
	<div class="mb-4"></div>
	{@render children?.()}

	<footer class="py-3 my-4 border-top ps-0 opacity-75">
		<div class="float-start">
			<small class="attribution">Lakshmi Kuttippurathu, PhD · Boston, MA</small>
		</div>
		<div class="float-end">
			{#each SOCIAL_MEDIA as social}
				<SocialMedia platform={social.platform} href={social.url} />
			{/each}
		</div>
	</footer>
</Container>

<style>
@media only screen and (max-width: 600px) {
	.nav-item { width: 90px; text-align: center; }
	.nav { justify-content: center; }
	.navbar-brand { width: 100%; text-align: center; margin-bottom: 5px; margin-left: 30px; }
}
</style>
