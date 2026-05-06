<script>
import "prismjs/themes/prism-tomorrow.min.css";
const { children, title, date } = $props();
</script>

<h4 style="font-family:var(--font-serif);">{title}</h4>
<p class="small text-muted">{date}</p>
{@render children?.()}
