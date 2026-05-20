import { trackLinkClick } from "@/lib/analytics";

interface TextLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const TextLink = ({ href, label, children }: TextLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLinkClick(href, label)}
      className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
    >
      {children}
    </a>
  );
};

export default TextLink;