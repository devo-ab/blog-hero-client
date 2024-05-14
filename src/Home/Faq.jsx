const Faq = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            How do I subscribe to your blog?
            </summary>
            <div className="px-4 pb-4">
              <p>
              To subscribe to our blog, simply enter your email address in the newsletter box located at the home page on our website. Once you submit your email, you'll receive a confirmation email. Click the link in the confirmation email to verify your subscription. You'll then receive notifications whenever we publish a new post.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            Can I contribute a guest post to your blog?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Currently, we do not accept guest posts. We appreciate your interest in contributing to our blog, but at this time, all content is created in-house by our dedicated team of writers. We focus on maintaining a consistent voice and quality throughout our posts. Thank you for understanding, and we encourage you to stay engaged with our content by reading, commenting, and sharing your thoughts with us.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            How can I contact you for collaboration or advertising opportunities?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              We're always open to collaboration and advertising inquiries! For collaboration opportunities, please reach out to us via the get In touch on our website, specifying the nature of the collaboration you're interested in. For advertising, please visit our "Advertise With Us" page where you can find detailed information about our ad rates and options, as well as a form to submit your inquiry. Our team will respond to you promptly to discuss further details.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
