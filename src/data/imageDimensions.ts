/** Intrinsic dimensions measured from the committed portfolio image assets. */
export const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/cairo_university_logo.jpeg": {
    "width": 200,
    "height": 200
  },
  "/images/enppi_logo.jpeg": {
    "width": 200,
    "height": 200
  },
  "/images/MIS.jpeg": {
    "width": 200,
    "height": 200
  },
  "/images/mustafa-alnagdy.webp": {
    "width": 1200,
    "height": 1600
  },
  "/images/onspec_engineering_solutions_logo.jpeg": {
    "width": 200,
    "height": 200
  },
  "/images/petrojet_logo.jpeg": {
    "width": 200,
    "height": 200
  },
  "/images/projects/image-analysis-agent/01-home-before-upload.webp": {
    "width": 1912,
    "height": 977
  },
  "/images/projects/image-analysis-agent/02-analyzing.webp": {
    "width": 1912,
    "height": 977
  },
  "/images/projects/image-analysis-agent/03-analysis-result.webp": {
    "width": 1912,
    "height": 980
  },
  "/images/projects/image-analysis-agent/04-search-page.webp": {
    "width": 1913,
    "height": 982
  },
  "/images/projects/image-analysis-agent/05-search-filters.webp": {
    "width": 1910,
    "height": 977
  },
  "/images/projects/n8n-rag-workflow.webp": {
    "width": 966,
    "height": 422
  },
  "/images/projects/n8n-slack-knowledge-workflow.webp": {
    "width": 1173,
    "height": 832
  },
  "/images/projects/n8n-social-workflow.webp": {
    "width": 1015,
    "height": 725
  },
  "/images/projects/reel-movie-agent/answer-network.webp": {
    "width": 1896,
    "height": 972
  },
  "/images/projects/reel-movie-agent/full-network.webp": {
    "width": 1909,
    "height": 974
  },
  "/images/projects/reel-movie-agent/landing.webp": {
    "width": 1887,
    "height": 975
  },
  "/images/projects/reel-movie-agent/login.webp": {
    "width": 1899,
    "height": 972
  },
  "/images/projects/smart-rag/ask.jpg": {
    "width": 1518,
    "height": 723
  },
  "/images/projects/smart-rag/citation-page.jpg": {
    "width": 1518,
    "height": 723
  },
  "/images/projects/smart-rag/figure.jpg": {
    "width": 1518,
    "height": 723
  },
  "/images/Waste Marche.png": {
    "width": 187,
    "height": 144
  }
};

export function dimensionsFor(source: string) {
  const dimensions = imageDimensions[source];
  if (!dimensions) throw new Error(`Missing intrinsic dimensions for ${source}`);
  return dimensions;
}
