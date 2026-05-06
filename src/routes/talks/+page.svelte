<script>
import { ListGroup } from "@sveltestrap/sveltestrap";
import Article from "$components/Article.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
</script>

<SectionHeader title="Talks & Speaking">
	Keynote and invited speaker at leading international conferences in computational biology, genomics, and AI-driven drug discovery.
</SectionHeader>

<div class="mt-3 mb-1">
	<hr class="section-rule" />
	<h6 style="font-family:var(--font-serif); color:var(--teal);">Keynote Addresses</h6>
</div>

<ListGroup flush>
	<Article
		emoji="🎤"
		title="AI-Driven Target Discovery: From Multi-Omics to Clinical Insights"
		venue="Bio-IT World Conference"
		date="2024"
		url="https://www.bio-itworldexpo.com"
	/>
	<Article
		emoji="🎤"
		title="Translating the Genome: AI Platforms for Drug Discovery"
		venue="Festival of Genomics & Biodata"
		date="2023"
		url="https://www.festivalofgenomics.com"
	/>
	<Article
		emoji="🎤"
		title="Building Scalable Computational Platforms for Therapeutic Target Discovery"
		venue="Drug Discovery Strategy Summit"
		date="2023"
		url="#"
	/>
	<Article
		emoji="🎤"
		title="Single-Cell Multi-Omics for Target Identification"
		venue="Single Cell OMICS Conference"
		date="2022"
		url="#"
	/>
</ListGroup>

<div class="mt-4 mb-1">
	<hr class="section-rule" />
	<h6 style="font-family:var(--font-serif); color:var(--teal);">Invited Talks & Panels</h6>
</div>

<ListGroup flush>
	<Article
		emoji="💬"
		title="Fireside Chat: AI/ML in Biotech — From Hype to Clinical Reality"
		venue="Swiss Consulate Boston"
		date="2025"
		url="#"
	/>
	<Article
		emoji="💬"
		title="Computational Genomics in Translational Medicine"
		venue="Discovery on Target Conference"
		date="2022"
		url="https://www.discoveryontarget.com"
	/>
</ListGroup>
