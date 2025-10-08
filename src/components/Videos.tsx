import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";

const Videos = () => {
  const videos = [
    {
      title: "How to Get High Package Jobs",
      description: "Interview with Punjabi News Channel",
      embedId: "PuEuZ9XqZ54",
      thumbnailUrl: `https://img.youtube.com/vi/PuEuZ9XqZ54/maxresdefault.jpg`,
    },
    {
      title: "Overcome Negative Thinking",
      description: "Transform your mindset for success",
      embedId: "z_JalBMnj5c",
      thumbnailUrl: `https://img.youtube.com/vi/z_JalBMnj5c/maxresdefault.jpg`,
    },
    {
      title: "Think About Them Also",
      description: "Motivational message on empathy",
      embedId: "V0P_2irGrNI",
      thumbnailUrl: `https://img.youtube.com/vi/V0P_2irGrNI/maxresdefault.jpg`,
    },
    {
      title: "How to Progress in Life",
      description: "Steps to achieve your goals",
      embedId: "geYD00pfnio",
      thumbnailUrl: `https://img.youtube.com/vi/geYD00pfnio/maxresdefault.jpg`,
    },
    {
      title: "Be an Eagle, Not a Chicken",
      description: "Rise above limitations",
      embedId: "d_apaRc1-vs",
      thumbnailUrl: `https://img.youtube.com/vi/d_apaRc1-vs/maxresdefault.jpg`,
    },
    {
      title: "Understanding True Karma",
      description: "The real meaning and its results",
      embedId: "0CMmy568W30",
      thumbnailUrl: `https://img.youtube.com/vi/0CMmy568W30/maxresdefault.jpg`,
    },
  ];

  return (
    <section
      id="videos"
      className="bg-gradient-to-br from-light-bg via-white to-light-bg py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Watch My Talks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspiring conversations and motivational sessions to help you grow
          </p>
        </div>

        <div className="max-w-7xl mx-auto animate-fade-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <VideoPlayer
                      thumbnailUrl={video.thumbnailUrl}
                      videoUrl={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                      title={video.title}
                      description={video.description}
                      aspectRatio="16/9"
                      className="shadow-2xl transition-all hover:shadow-accent/20"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 bg-accent text-accent-foreground hover:bg-accent/90" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16 bg-accent text-accent-foreground hover:bg-accent/90" />
          </Carousel>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-xs text-muted-foreground">
            Swipe to see more videos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Videos;
