<script>
import { ListGroupItem } from "@sveltestrap/sveltestrap";
import { format, formatDistanceStrict } from "date-fns";

let { start = "January 1 1970", end = null, company = null, url = null, image = null, children } = $props();

const startDate = new Date(start);
const endDate = end ? new Date(end) : new Date();
const nbYears = formatDistanceStrict(startDate, endDate);
</script>

<ListGroupItem class="px-0 py-3">
	<h6 class="mt-1 mb-1" style="font-family:var(--font-serif);">
		{#if image}
			<img class="me-1" width="28" height="28" src={image} alt="Logo for {company}" />
		{/if}
		<a class="text-decoration-none" style="color:var(--ink);" href={url} target={!url ? null : "_blank"}>
			{company}
		</a>
	</h6>

	<small style="color:var(--muted);">
		{format(startDate, "MMMM yyyy")}
		&mdash;
		{#if end}
			{format(endDate, "MMMM yyyy")}
		{:else}
			Present
		{/if}
		{#if end}
			<strong style="color:var(--teal);">({nbYears})</strong>
		{/if}
	</small>

	<div class="mt-2">
		{@render children?.()}
	</div>
</ListGroupItem>
