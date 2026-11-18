import { certifications } from "../constants/portfolioUpdates";
import { HorizontalCarousel } from "./ProjectCarousel";
import ExperienceDisclosure from "./ExperienceDisclosure";

export default function ExperienceEvidence({ experience }) {
  const material = experience.supportingMaterial;
  const certificates = material.certificateProvider
    ? certifications.filter((item) => item.provider === material.certificateProvider)
    : [];

  return (
    <ExperienceDisclosure className="mt-5">
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-neutral-400">{material.description}</p>

        {certificates.length > 0 && (
          <section aria-labelledby="asah-certificates-heading">
            <h5 id="asah-certificates-heading" className="text-base font-medium text-white">Dicoding Certificates</h5>
            <HorizontalCarousel
              items={certificates}
              id="asah-certificates-carousel"
              label="Dicoding certificates"
              labelledBy="asah-certificates-heading"
              itemClassName="min-w-0 flex-[0_0_88%] snap-start sm:flex-[0_0_70%] lg:flex-[0_0_60%]"
              renderItem={(certificate) => (
                <article className="flex h-full min-w-0 flex-col rounded-xl border border-white/10 bg-midnight/60 p-5">
                  {certificate.image && <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" className="mb-4 aspect-[1.414] w-full object-contain" />}
                  <p className="text-xs text-sand">{certificate.issuer}</p>
                  <h6 className="mb-5 mt-3 text-base font-medium leading-relaxed text-white">{certificate.title}</h6>
                  <a href={encodeURI(certificate.href)} target="_blank" rel="noopener noreferrer" className="experience-action mt-auto w-fit">
                    Certificate (PDF)<img src="/assets/arrow-up.svg" alt="" className="size-4 rotate-45" /><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              )}
            />
          </section>
        )}

        {material.links?.length > 0 && (
          <section aria-label={material.title || "Organization profiles"}>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {material.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="experience-action">
                  {link.label}<img src="/assets/arrow-up.svg" alt="" className="size-4 rotate-45" /><span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </ExperienceDisclosure>
  );
}
