import React from "react";

function Home() {
  return (
    <>
      <div className="ml-9  ">
        <div
          className="text-white h-[50vh] 
          m-0 w-11/12 flex justify-around  "
        >
          {/* ------->Image<------- */}

          <div className=" h-5/6  ">
            {/* Photo */}
            <div
              className="
             w-80 h-[320px] ml-52 "
            >
              <img
                src="public/images/qaisar.png"
                className=" hover:grayscale hover:-skew-y-12 hover:backdrop-brightness-110 hover:outline red"
              />
            </div>
          </div>

          {/* ------->Text<------- */}
          <div className="w-1/2 h-1/2 mt-20">
            {/* text */}
            <div className="w-1/2">
              <p className=" text-[50px]">
                <span
                  className="text-orange-600 
                hover:animate-bounce inline-flex "
                >
                  Hi!
                </span>{" "}
                I am
              </p>
            </div>
            <div className=" text-[60px] pl-20">
              <p className="flex">
                Mohd.
                <p
                  className=" underline text-blue-500 
                hover:outline-dashed"
                >
                  Qaisar
                </p>
                Moin
              </p>
            </div>
          </div>
        </div>

        {/* ------->Lower text<------- */}
        <div className="text-white text-center px-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo
          velit aliquam labore facilis dolorum inventore obcaecati non modi
          officiis neque alias aut odit sint, id aspernatur. Saepe explicabo
          sint perspiciatis vero doloremque accusamus. Ut minus omnis doloremque
          nesciunt porro laudantium numquam in, quia quo. Voluptas id, qui autem
          voluptatem quaerat quod reiciendis debitis ducimus praesentium quidem
          non explicabo. Assumenda, repellat aut alias saepe nisi, perspiciatis
          deleniti numquam eius natus exercitationem enim ex optio. Atque
          temporibus aspernatur magni commodi debitis adipisci fugiat quam fugit
          animi rerum consectetur laborum exercitationem vero cumque laudantium,
          odio corrupti, optio sint quo? Provident, explicabo consequuntur?
        </div>
      </div>
    </>
  );
}

export default Home;
