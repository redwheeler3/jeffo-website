import Avatar from "@/components/Avatar";
import SocialIcon from "@/components/SocialIcon";
import LinkButton from "@/components/LinkButton";
import TextLink from "@/components/TextLink";
import profileImage from "@/assets/profile.jpg";

// Custom SVG icons for higher resolution and better visual impact
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Index = () => {
  const resumeLink = "/OriecuiaResume.pdf";
  const githubLink = "https://github.com/redwheeler3/";
  const eventBridgePipesWorkshopLink = "https://catalog.workshops.aws/eb-pipes";
  const musicLink = "https://music.jeffo.net/";
  const pentaCoopLink = "https://www.pentacoop.com/?utm_source=jeffo.net&utm_medium=referral";

  const links = [
    {
      label: "My Resume",
      href: resumeLink,
    },
    {
      label: "Amazon EventBridge Pipes Workshop",
      href: eventBridgePipesWorkshopLink,
    },
    {
      label: "GitHub Projects",
      href: githubLink,
    },
    {
      label: "Penta Housing Co-op Website",
      href: pentaCoopLink,
    },
    {
      label: "Unsanctioned Songs About Pipes",
      href: musicLink,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-5 py-16">
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl flex flex-col items-center">
        {/* Avatar */}
        <Avatar src={profileImage} alt="Jeff Oriecuia" />

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-8 opacity-0 animate-fade-in-up animation-delay-100 tracking-tight">
          Jeff Oriecuia
        </h1>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-5 opacity-0 animate-fade-in-up animation-delay-200">
          <SocialIcon
            href="https://www.linkedin.com/in/jefforiecuia/"
            icon={<LinkedInIcon />}
            label="LinkedIn"
          />
          <SocialIcon
            href={githubLink}
            icon={<GitHubIcon />}
            label="GitHub"
          />
          <SocialIcon
            href="https://www.facebook.com/redwheeler"
            icon={<FacebookIcon />}
            label="Facebook"
          />
          <SocialIcon
            href="mailto:contact@jeffo.net"
            icon={<EmailIcon />}
            label="Email"
          />
        </div>

        {/* Bio Section */}
        <div className="text-center mt-10 space-y-4 opacity-0 animate-fade-in-up animation-delay-300">
          <p className="text-lg font-semibold text-foreground">
            Nice to meet you!
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm a technical product manager in Vancouver, currently at Amazon,
            with a background in cloud platforms, APIs, pricing, customer
            discovery, and large-scale distributed systems. You can learn more
            about my professional background in <TextLink href={resumeLink} label="Inline Resume">my resume</TextLink>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At AWS, I worked on core Amazon EventBridge services used by 1.8M+
            customers, including pricing work for a platform generating $37M in
            annual revenue. More recently, I've been working on Amazon Bazaar,
            a cross-border shopping app for customers across Latin America, the
            Middle East, and Asia-Pacific.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I like public speaking, hands-on demos, and making complex technical
            products easier to understand. I created and presented a hands-on <TextLink href={eventBridgePipesWorkshopLink} label="Inline Amazon EventBridge Pipes Workshop">Amazon EventBridge Pipes workshop</TextLink> at
            re:Invent three years in a row.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I still enjoy getting my hands dirty with code. My <TextLink href={githubLink} label="Inline GitHub Projects">GitHub</TextLink> has
            a mix of practical projects and experiments, including this site,
            investment portfolio tooling, and a Cline MCP bridge for Gmail and Google Calendar.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside work, I snowboard, sail, explore new places, and live in a
            housing co-op where I built our <TextLink href={pentaCoopLink} label="Inline Penta Housing Co-op Website">community website</TextLink>. Lately I've
            also been "creating" AI music, though it skews pretty heavily into
            songs about Pipes and other AWS stuff. Feel free to <TextLink href={musicLink} label="Inline Unsanctioned Songs About Pipes">give it a listen</TextLink>!
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm always happy to connect about product leadership, platform work,
            speaking opportunities, co-op living, or getting a website off the
            ground.
          </p>
        </div>

        {/* Links */}
        <div className="w-full mt-10 space-y-3">
          {links.map((link, index) => (
            <LinkButton
              key={link.label}
              href={link.href}
              label={link.label}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
