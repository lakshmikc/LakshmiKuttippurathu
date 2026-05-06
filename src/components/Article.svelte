<script>
import { ListGroupItem } from "@sveltestrap/sveltestrap";
let { url, title, description = null, date, venue = null, emoji = "📄", author = null } = $props();
</script>

<ListGroupItem class="p-0 pt-3">
	<span class="fs-6">
		{emoji}
		<a class="text-decoration-none" href={url} target={url.startsWith("/") ? null : "_blank"}>
			{title}
		</a>
		<p class="small" style="color:var(--muted);">
			{#if description}
				<span style="color:var(--ink-mid);">{@html description}</span><br />
			{/if}
			{date}
			{#if venue}
				&bullet;
				<span class="fw-bold" style="color:var(--teal);">{venue}</span>
			{/if}
			{#if author}
				<br /><small>by <strong>{author}</strong></small>
			{/if}
		</p>
	</span>
</ListGroupItem>
