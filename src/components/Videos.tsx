const Videos = () => {
  const videos = [
    {
      title: "The Future of Education in the Age of AI",
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
    },
    {
      title: "Leadership in Learning Institutions",
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
    },
    {
      title: "Motivation for Educators and Students",
      embedId: "dQw4w9WgXcQ", // Placeholder - replace with actual video ID
    },
  ];

  return (
    <section id="videos" className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold text-foreground inline-block relative">
            Watch My Talks
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform translate-y-2"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {video.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
