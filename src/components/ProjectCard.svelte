<script>
import { Card, Col } from "@sveltestrap/sveltestrap";
let { name, date = null, description = "", url, img } = $props();
</script>

<Col>
	<Card color="light" body class="shadow-sm mt-3" style="border:1px solid var(--border);">
		<h6 style="font-family:var(--font-serif);">
			<a class="text-decoration-none stretched-link" style="color:var(--teal);" href={url} target={url.startsWith("/") ? "" : "_blank"}>
				{name}
			</a>
		</h6>
		<p class="fw-light text-muted small mb-0">
			{description}
			{#if date}<br /><small class="opacity-75">{date}</small>{/if}
		</p>
		{#if img}
			<img height="200" class="object-fit-cover mt-2 rounded" src={img} alt="{name}" />
		{/if}
	</Card>
</Col>
