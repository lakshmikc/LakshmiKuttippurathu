<script>
import { Row, Col, Badge } from "@sveltestrap/sveltestrap";
import { meta_description, meta_title, meta_url } from "$lib/config";
</script>

<svelte:head>
	<meta name="og:type" content="website" />
	<meta name="og:title" content={meta_title} />
	<meta name="twitter:title" content={meta_title} />
	<meta name="description" content={meta_description} />
	<meta name="og:description" content={meta_description} />
	<meta name="twitter:description" content={meta_description} />
	<meta name="og:url" content={meta_url} />
</svelte:head>

<!-- Hero -->
<div class="d-flex gap-4 p-4 rounded-3 mb-4" style="background: linear-gradient(135deg, #e6f4f2 0%, #f9f2e6 100%); border: 1px solid #d0e8e4;">
	<div class="flex-shrink-0">
		<img src="/assets/KCL-mugshot.png" alt="Lakshmi Kuttippurathu" style="width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid var(--teal);" />
	</div>
	<div>
		<h4 class="mb-1" style="font-family:var(--font-serif);">Lakshmi Kuttippurathu, PhD</h4>
		<p class="mb-2 text-muted" style="font-size:0.9rem;">Boston, MA · <a href="mailto:lakshmikc@gmail.com">lakshmikc@gmail.com</a> · <a href="https://www.linkedin.com/in/lakshmikc" target="_blank">LinkedIn</a> · <a href="https://github.com/lakshmikc" target="_blank">GitHub</a></p>
		<div>
			<span class="chip">Co-Founder · Janma Bio</span>
			<span class="chip">SAB · Bioscope AI</span>
			<span class="chip">Advisor/Consultant </span>
		</div>
	</div>
</div>

<!-- About -->
<div class="mb-4">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">About</h5>
	<p style="max-width: 720px; color: var(--ink-mid);">
		Physicist turned computational biology and translational AI leader with 15+ years of experience across academia, biotech, and early-stage company building.
	</p>
	<p style="max-width: 720px; color: var(--ink-mid);">
		I partner with biotech and pharma teams at critical points in their R&D journey — providing fractional computational biology leadership, shaping discovery and portfolio strategy, and helping teams turn complex multi-omics, genetic, and phenotypic data into clearer scientific and investment decisions.
	</p>
	<p style="max-width: 720px; color: var(--ink-mid);">
		My experience spans target discovery, platform development, precision medicine, and translational research across cardiometabolic disease, cardiovascular disease, and neuroscience. I have built and led computational platforms, developed AI/ML-enabled discovery strategies, and worked across scientific and organizational boundaries to move programs from data and hypotheses toward actionable R&D decisions.
	</p>
	<p style="max-width: 720px; color: var(--ink-mid);">
		I help build AI-driven platforms that convert complex multi-omics, phenotypic, and clinical datasets into decisions that shape drug programs and investment strategy — from early discovery through preclinical development.
	</p>
	<p style="max-width: 720px; color: var(--ink-mid);">
		Keynote speaker at Bio-IT World, Festival of Genomics & Biodata, Drug Discovery Strategy Summit, and Single Cell OMICS Conference. Invited speaker and fireside chat guest on AI/ML in Biotech at the Swiss Consulate Boston (2025).
	</p>
</div>

<!-- Expertise -->
<div class="mb-4">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Areas of Expertise</h5>
	<Row class="mt-2 g-3">
		<Col md={6}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:14px 16px;">
				<div style="font-weight:600; font-size:0.85rem; color:var(--teal); margin-bottom:6px;">🔬 Translational Science & Precision Medicine</div>
				<div class="expertise-grid">
					{#each ["Biomarker discovery", "Patient stratification", "Mechanism-of-action analytics", "Target discovery & validation", "Translational data interpretation"] as item}
						<span class="expertise-pill">{item}</span>
					{/each}
				</div>
			</div>
		</Col>
		<Col md={6}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:14px 16px;">
				<div style="font-weight:600; font-size:0.85rem; color:var(--teal); margin-bottom:6px;">🧬 Multi-Omics & Biological Data</div>
				<div class="expertise-grid">
					{#each ["Genomics", "Transcriptomics", "Single-cell sequencing", "GWAS", "Proteomics", "Metabolomics", "Multi-modal integration"] as item}
						<span class="expertise-pill">{item}</span>
					{/each}
				</div>
			</div>
		</Col>
		<Col md={6}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:14px 16px;">
				<div style="font-weight:600; font-size:0.85rem; color:var(--teal); margin-bottom:6px;">🤖 AI / ML for Biology</div>
				<div class="expertise-grid">
					{#each ["Predictive modeling", "Target prioritization", "Phenotype stratification", "ML pipelines for biomedical data", "Systems biology modeling"] as item}
						<span class="expertise-pill">{item}</span>
					{/each}
				</div>
			</div>
		</Col>
		<Col md={6}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:14px 16px;">
				<div style="font-weight:600; font-size:0.85rem; color:var(--teal); margin-bottom:6px;">⚙️ Platforms & Infrastructure</div>
				<div class="expertise-grid">
					{#each ["Cloud pipelines (AWS)", "Nextflow / WGS workflows", "Reproducible workflows", "FAIR data environments", "Multi-omics data integration"] as item}
						<span class="expertise-pill">{item}</span>
					{/each}
				</div>
			</div>
		</Col>
	</Row>
</div>

<!-- Current Roles -->
<div class="mb-4">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Current Roles</h5>
	<Row class="mt-2 g-3">
		<Col md={4}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:16px; height:100%;">
				<div style="font-size:0.75rem; font-weight:600; color:var(--teal); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Co-Founder</div>
				<div style="font-weight:600; margin-bottom:4px;"><a href="" target="_blank" style="text-decoration:none; color:var(--ink);">Janma Bio</a></div>
				<div style="font-size:0.82rem; color:var(--muted);">2026 – Present</div>
				<p style="font-size:0.85rem; color:var(--ink-mid); margin-top:8px; margin-bottom:0;">Leading scientific strategy, computational biology, and data-driven decision-making for a Womens Health digital discovery inititative.</p>
			</div>
		</Col>
		<Col md={4}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:16px; height:100%;">
				<div style="font-size:0.75rem; font-weight:600; color:var(--teal); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Scientific Advisory Board</div>
				<div style="font-weight:600; margin-bottom:4px;">Bioscope AI</div>
				<div style="font-size:0.82rem; color:var(--muted);">2026 – Present</div>
				<p style="font-size:0.85rem; color:var(--ink-mid); margin-top:8px; margin-bottom:0;">Advising on AI-driven precision medicine platform integrating EHR, genomics, and phenotypic data for clinical decision support.</p>
			</div>
		</Col>
		<Col md={4}>
			<div style="background:#fff; border:1px solid var(--border); border-radius:8px; padding:16px; height:100%;">
				<div style="font-size:0.75rem; font-weight:600; color:var(--teal); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">ML Advisor</div>
				<div style="font-weight:600; margin-bottom:4px;">Multiple Organizations</div>
				<div style="font-size:0.82rem; color:var(--muted);">2025 – Present</div>
				<p style="font-size:0.85rem; color:var(--ink-mid); margin-top:8px; margin-bottom:0;">Leading Strategy for computational biology engagements supporting multiple biotech/pharma teams.</p>
			</div>
		</Col>
	</Row>
</div>

<!-- Platforms Built -->
<div class="mb-4">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Platforms Built</h5>
	<div class="mt-2">
		{#each [
			{ name: "LexGPT", desc: "AI-driven therapeutic target discovery platform integrating genomic, phenotypic, and clinical datasets" },
			{ name: "LexMission", desc: "Cloud-based multi-omics bioinformatics workflow for target prioritization (internal E2E platform)" },
			{ name: "SMART-3seq", desc: "Single-cell RNA-seq analysis pipeline (published workflow)" },
			{ name: "COMPACT", desc: "Comparative gene expression analysis framework for high-throughput genomic data (published)" },
			{ name: "CompleteMOTIFs", desc: "Transcription factor binding motif discovery platform · adopted by 100+ Harvard researchers" }
		] as p}
			<div class="platform-row">
				<span class="platform-tag">{p.name}</span>
				<span style="font-size:0.88rem; color:var(--ink-mid);">{p.desc}</span>
			</div>
		{/each}
	</div>
</div>

<!-- Awards -->
<div class="mb-2">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Awards & Recognition</h5>
	<Row class="mt-2 g-2">
		{#each [
			"Excellence in Healthcare Award — Health 2.0 Conference (2025)",
			"NIH/NIAAA Young Investigator Award — International Symposium for Hepatic Sinusoidal Research",
			"Fluxx Award — Scientific Contribution to Data-Driven Healthcare (2025)",
			"Top Biotech Leader — InsightSuccess Magazine (2025)",
			"Women Leaders in Biotechnology — Empire Magazine (2025)"
		] as award}
			<Col md={6}>
				<div class="award-card">
					<span style="font-size:0.88rem;">🏆 {award}</span>
				</div>
			</Col>
		{/each}
	</Row>
</div>
