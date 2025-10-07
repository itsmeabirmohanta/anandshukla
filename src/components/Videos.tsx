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
    <section id="videos" className="bg-light-bg py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 animate-fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground inline-block relative">
            Watch My Talks
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform translate-y-2"></span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
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
