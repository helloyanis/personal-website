const personLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2025-10-23T12:34:00-00:00",
  mainEntity: {
    "@type": "Person",
    name: "🦊 helloyanis",
    description: "Software engineer and web developer creating cool projects!",
    image: "https://xn--3s8h30f.ws/assets/images/profile.png",
    sameAs: [
      "https://github.com/helloyanis",
      "https://furries.club/@helloyanis",
      "https://addons.mozilla.org/user/17521637"
    ]
  }
};

export default function PersonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personLd).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}