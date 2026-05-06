<script>
import { ListGroup } from "@sveltestrap/sveltestrap";
import Experience from "$components/Experience.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
</script>

<SectionHeader title="Resume">
	Computational Biology & Translational AI Leader · 15+ years
</SectionHeader>

<div class="mb-1 mt-2">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Professional Experience</h5>
</div>

<ListGroup flush>
	<Experience start="January 2026" company="Encure Biotherapeutics" url="https://ensurebio.com">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Co-Founder & Computational Biology Lead</div>
				<p class="mb-1 small" style="color:var(--ink-mid);">
					Leading scientific strategy, computational biology, and data-driven decision-making for a cardiometabolic drug discovery platform. Building the analytical and SaaS foundation for target discovery and advancing the pipeline from hypothesis through IND-enabling studies.
				</p>
				<p class="mb-0 small" style="color:var(--ink-mid);">Creating hypotheses for leading assets in HFpEF indications; developing end-to-end bioinformatics platform for cardiovascular drug discovery.</p>
			</li>
		</ul>
	</Experience>

	<Experience start="August 2025" company="Bioscope AI · Melior Discovery (Advisory)" url="#">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Scientific Advisor & Technical Leader</div>
				<p class="mb-1 small" style="color:var(--ink-mid);">
					<strong>Bioscope AI (SAB):</strong> Advising on AI-driven precision medicine platform integrating EHR, genomics, and phenotypic data for translational insights and clinical decision support.
				</p>
				<p class="mb-0 small" style="color:var(--ink-mid);">
					<strong>Melior Discovery (ML Advisor):</strong> Leading ML strategy for modeling experimental variability in preclinical disease models to improve reproducibility and statistical power.
				</p>
			</li>
		</ul>
	</Experience>

	<Experience start="January 2021" end="December 2024" company="Lexicon Pharmaceuticals" url="https://www.lexpharma.com">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Associate Director, Computational Biology & Data Sciences</div>
				<p class="mb-2 small" style="color:var(--ink-mid);">Led bioinformatics strategy and platform development for target discovery and translational research in metabolic and neurological diseases.</p>
				<ul class="small mb-2" style="color:var(--ink-mid); padding-left:1.2rem;">
					<li>Designed and deployed <strong>LexGPT</strong>, an AI-driven platform integrating internal experimental data with external genomic, genetic, and clinical datasets for scalable therapeutic target discovery</li>
					<li>Developed <strong>LexMission</strong>, a cloud-based multi-omics pipeline (Python/R/ShinyR) to prioritize disease-relevant gene targets across metabolism and neuroscience programs</li>
					<li>Led multi-omics transcriptome-wide analyses to identify and validate novel therapeutic targets</li>
					<li>Directed CRO collaborations to design functional genomics experiments supporting target validation</li>
					<li>Presented computational strategies and translational insights to executive leadership and board members</li>
				</ul>
				<div class="outcome-box">
					🏆 <strong>Key Outcome:</strong> Bioinformatics contributions enabled a <strong>$1B partnership with Novo Nordisk</strong> for first-in-class obesity therapeutic LG9851.
				</div>
			</li>
		</ul>
	</Experience>

	<Experience start="January 2019" end="December 2021" company="Thomas Jefferson University — Research Faculty" url="https://www.jefferson.edu">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Research Faculty — Computational Biology & Functional Genomics</div>
				<p class="mb-2 small" style="color:var(--ink-mid);">Led computational modeling and bioinformatics initiatives within an NIH SPARC-funded program studying cardiac neural circuits.</p>
				<ul class="small mb-0" style="color:var(--ink-mid); padding-left:1.2rem;">
					<li>Directed scRNA-seq analysis and computational modeling of neuronal subpopulations regulating cardiac function</li>
					<li>Developed and published reproducible bioinformatics workflows (SMART-3seq pipeline)</li>
					<li>Designed and taught graduate-level computational genomics curriculum; mentored trainees from high school through PhD level</li>
					<li>Contributed bioinformatics strategy to funded NIH grant applications</li>
				</ul>
			</li>
		</ul>
	</Experience>

	<Experience start="January 2012" end="December 2017" company="Thomas Jefferson University — Postdoc" url="https://www.jefferson.edu">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Postdoctoral Fellow / Research Scientist — Computational Genomics</div>
				<p class="mb-2 small" style="color:var(--ink-mid);">Developed COMPACT, a novel computational framework for comparative gene expression analysis; published in peer-reviewed journals. Conducted integrative multi-omics analyses characterizing transcriptional regulatory networks in tissue regeneration. Authored 4 first-author publications.</p>
			</li>
		</ul>
	</Experience>

	<Experience start="January 2009" end="December 2011" company="Harvard-MIT Health Sciences & Technology" url="https://hst.mit.edu">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Research Fellow — Bioinformatics</div>
				<p class="mb-0 small" style="color:var(--ink-mid);">Designed and deployed CompleteMOTIFs, a scalable web-based bioinformatics platform for transcription factor binding analysis adopted by 100+ Harvard researchers.</p>
			</li>
		</ul>
	</Experience>
</ListGroup>

<!-- Education -->
<div class="mt-4 mb-1">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Education & Certifications</h5>
</div>

<ListGroup flush>
	<Experience start="January 2005" end="December 2009" company="Indian Institute of Technology Madras" url="https://www.iitm.ac.in">
		<div class="fw-bold small">PhD, Computational BioPhysics</div>
	</Experience>
	<Experience start="January 2011" end="December 2011" company="Brandeis University" url="https://www.brandeis.edu">
		<div class="fw-bold small">Masters Certificate, Bioinformatics</div>
	</Experience>
	<Experience start="January 2022" end="December 2022" company="MIT Sloan" url="https://mitsloan.mit.edu">
		<div class="fw-bold small">Certificate — Artificial Intelligence in Pharma & Biotech</div>
	</Experience>
</ListGroup>

<!-- Skills -->
<div class="mt-4 mb-2">
	<hr class="section-rule" />
	<h5 style="font-family:var(--font-serif); color:var(--teal);">Technical Skills</h5>
	<div class="mt-2 small" style="color:var(--ink-mid);">
		<div class="mb-1"><strong>Languages & Tools:</strong> Python · R · Nextflow · SQL · Git · Linux · Seurat · Scanpy · R Shiny · Plotly</div>
		<div class="mb-1"><strong>Cloud & Infrastructure:</strong> AWS · Reproducible workflows · Data governance · FAIR data environments · Version-controlled pipelines</div>
		<div class="mb-0"><strong>Genomics Methods:</strong> RNA-seq · scRNA-seq · ChIP-seq · GWAS · QTL · Proteomics · Metabolomics · Variant calling</div>
	</div>
</div>
