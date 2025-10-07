import messagePhoto from "@/assets/message-photo.jpg";

const Message = () => {
  return (
    <section
      className="relative bg-dark-bg py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(4, 4, 4, 0.95) 0%, rgba(4, 4, 4, 0.85) 40%, rgba(4, 4, 4, 0.6) 70%, rgba(4, 4, 4, 0.4) 100%), url(${messagePhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl animate-fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 relative inline-block">
            A Message
            <span className="absolute bottom-0 left-0 w-14 sm:w-16 md:w-20 h-1 bg-accent transform translate-y-2"></span>
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6 text-primary-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
            <p className="italic">
              "Education is not just about knowledge — it is about building character,
              purpose and confidence. My mission is to create a generation of learners
              who lead with vision and live with values."
            </p>

            <p className="italic">
              "Through my talks and mentorship, I aim to inspire educators and students
              to discover their potential and shape a future that matters."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
