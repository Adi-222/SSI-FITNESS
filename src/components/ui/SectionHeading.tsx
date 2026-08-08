import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  highlight,
  centered = true,
}: SectionHeadingProps) {
  // Split the title to apply highlight to specific word
  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>;
    }

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-orange">{highlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <ScrollReveal className={centered ? "text-center" : ""}>
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight ${
          centered ? "text-center" : ""
        }`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`text-text-secondary text-lg mt-4 max-w-2xl ${
            centered ? "mx-auto text-center" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`section-divider mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </ScrollReveal>
  );
}
