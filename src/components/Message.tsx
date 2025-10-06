import messagePhoto from "@/assets/message-photo.jpg";

const Message = () => {
  return (
    <section
      className="relative bg-dark-bg py-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(4, 4, 4, 0.95) 0%, rgba(4, 4, 4, 0.85) 50%, rgba(4, 4, 4, 0.4) 100%), url(${messagePhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-4xl font-bold text-primary-foreground mb-2 relative inline-block">
            A Message
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent transform translate-y-2"></span>
          </h2>

          <div className="mt-8 space-y-6 text-primary-foreground/90 text-lg leading-relaxed border-l-4 border-accent pl-6">
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
