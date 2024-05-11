import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const NewsLetter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        if(email){
            return Swal.fire({
                title: 'Success!',
                text: 'Newsletter Subscribe Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    };

  return (
    <div className="mt-10">
        <p className="text-5xl text-center font-bold sm:text-6xl">Newsletter Section</p>
      <section>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="../../public/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              <span className="text-[#4D869C]">Newsletter</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              You can subscribe our newsletter,to get news and updates in email
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input className="" name="email" id="email" type="email" placeholder="Enter your email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
