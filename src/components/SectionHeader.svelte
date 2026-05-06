<script>
let { title, children } = $props();
</script>

<div class="mb-3">
	<hr class="section-rule" />
	<h4 style="font-family:var(--font-serif); color:var(--teal);">{title}</h4>
	{#if children}
		<div class="text-muted" style="font-size:0.9rem;">{@render children?.()}</div>
	{/if}
</div>
