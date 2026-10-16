import CallButton from './CallButton';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  bgClass?: string;
}

export default function CTASection({
  headline = 'Having a Drain Problem?',
  subtext = 'Contact Boise Drain Service to discuss your drain-cleaning needs.',
  bgClass = 'bg-slate-900',
}: CTASectionProps) {
  return (
    <section className={`${bgClass} py-16 sm:py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{subtext}</p>
        <CallButton variant="primary" size="lg" label="Call 208-768-0044" />
      </div>
    </section>
  );
}
