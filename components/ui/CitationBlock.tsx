import { getCitation } from "@/lib/citations";

interface CitationBlockProps {
  citationId: string;
  /** true = superscript inline link, false = full block citation */
  inline?: boolean;
}

export default function CitationBlock({
  citationId,
  inline = false,
}: CitationBlockProps) {
  const citation = getCitation(citationId);

  if (!citation) return null;

  if (inline) {
    return (
      <sup>
        <a
          href={citation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-water-teal hover:underline text-xs ml-0.5"
          aria-label={`Citation: ${citation.title}`}
        >
          [{citation.authors}, {citation.year}]
        </a>
      </sup>
    );
  }

  return (
    <blockquote className="border-l-4 border-water-teal pl-4 py-2 my-4 bg-blue-50 rounded-r-md text-sm text-gray-700 italic">
      <a
        href={citation.url}
        target="_blank"
        rel="noopener noreferrer"
        className="not-italic font-semibold text-lake-blue hover:underline"
      >
        {citation.authors} ({citation.year})
      </a>
      {" — "}
      {citation.title}.{" "}
      <span className="text-gray-500">{citation.source}.</span>
    </blockquote>
  );
}
