import { trackLinkClick } from "@/lib/analytics";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => trackLinkClick(href, label)}
      className="social-icon"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
