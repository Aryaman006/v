import React from "react";

const ServiceTemplate = ({
  title,
  subtitle,
  description,
  sections,
  footerTitle,
  footerDescription,
  contactAreas,
  imageUrl, // <-- added dynamic imageUrl prop
}) => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* Header with Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center rounded-lg mb-16"
        style={{
          backgroundImage: `url(${imageUrl})`, // <-- now dynamic
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Title and Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-4xl font-extrabold leading-tight">{title}</h1>
          <p className="text-sm mt-2">{subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-700 text-lg space-y-6 mb-16">
        {Array.isArray(description) ? (
          description.map((para, idx) => (
            <p key={idx} className="transition-all">{para}</p>
          ))
        ) : (
          <p className="transition-all">{description}</p>
        )}
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 tracking-tight">{section.heading}</h2>
          <div className="text-gray-700 text-lg space-y-6 mb-16">
            {Array.isArray(section.description) ? (
              section.description.map((para, idx) => (
                <p key={idx} className="transition-all">{para}</p>
              ))
            ) : (
              <p className="transition-all">{section.description}</p>
            )}
          </div>

          {section.type === "list" && (
            <ul className="text-blue-600 text-lg space-y-4">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">❄️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.type === "services" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-blue-600 text-lg">
              {section.items.map((service, serviceIdx) => (
                <div
                  key={serviceIdx}
                  className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
                >
                  <span className="text-blue-400">❄️</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          )}

          {section.type === "reasons" && (
            <ul className="text-blue-600 text-lg space-y-4">
              {section.items.map((reason, reasonIdx) => (
                <li key={reasonIdx} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">❄️</span>
                  <span>
                    <strong>{reason.title}:</strong> {reason.description}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {section.type === "para" && (
            <div className="text-gray-700 text-lg space-y-6">
              {section.items.map((para, paraIdx) => (
                <p key={paraIdx} className="transition-all">{para}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div className="text-gray-700 text-lg">
        {footerTitle && (
          <h2 className="text-3xl font-bold text-blue-700 mb-6">{footerTitle}</h2>
        )}
        {footerDescription && (
          <p className="text-lg mb-4">{footerDescription}</p>
        )}
        {Array.isArray(contactAreas) && contactAreas.length > 0 && (
          <p className="font-semibold text-lg mt-4">
            Contact us for all your laundry needs in{" "}
            <span className="text-blue-700">{contactAreas.join(", ")}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceTemplate;
