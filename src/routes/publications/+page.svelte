<script>
import { ListGroup } from "@sveltestrap/sveltestrap";
import Article from "$components/Article.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
</script>

<SectionHeader title="Publications">
	Peer-reviewed research spanning computational genomics, systems biology, and translational science.
	Full list on <a href="https://orcid.org/0000-0001-6612-9040" target="_blank">ORCID</a>.
</SectionHeader>

<ListGroup flush class="mt-3">
	<Article
		emoji="🫀"
		title="A single cell transcriptomics map of paracrine networks in the intrinsic cardiac nervous system"
		date="2021"
		venue="iScience"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
	<Article
		emoji="🍺"
		title="Pattern analysis of genome-wide binding activity uncovering chronic ethanol-induced disruption of C/EBP dynamics during liver regeneration priming"
		date="2016"
		venue="Molecular & Cellular Biology"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
	<Article
		emoji="🧬"
		title="Acyl-CoA Synthetase 5 knockout and inhibitors protect against diet-induced obesity in mice by activating the ileal brake"
		date="2022"
		venue="Cell Metabolism"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
	<Article
		emoji="🔬"
		title="Active Remodeling of Chromatin and Implications for In Vivo Folding"
		date="2015"
		venue="Scientific Reports"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
	<Article
		emoji="🧫"
		title="COMPACT: A comparative transcriptomics tool for differential expression analysis"
		date="2014"
		venue="Bioinformatics"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
	<Article
		emoji="🖥️"
		title="CompleteMOTIFs: DNA motif discovery platform for transcription factor binding analysis"
		date="2011"
		venue="Bioinformatics"
		url="https://orcid.org/0000-0001-6612-9040"
	/>
</ListGroup>

<div class="mt-3 small text-muted">
	<a href="https://orcid.org/0000-0001-6612-9040" target="_blank">View full publication list on ORCID →</a>
</div>
