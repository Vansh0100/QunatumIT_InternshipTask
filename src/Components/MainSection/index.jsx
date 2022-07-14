import React from "react";
import Button from "react-bootstrap/Button";
function LargeScreen() {
  return (
    <>
      <div className="hidden lg:block w-full" id="gradient">
        <div className="flex h-full justify-center">
          <div className="w-4/5  h-full flex justify-center p-16">
            <div className="w-3/5 flex justify-center">
              <div className="w-4/5  text-left">
                <p className=" text-2xl">Ki Name Bolbo Tomako</p>
                <h1 className="text-3xl">
                  We Are Consulting For Your <br />
                  Business Finances
                </h1>
                <p className="text-xl mt-4 leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates repellat, alias omnis ut incidunt molestias
                  consequuntur reiciendis ipsa non quam architecto esse quo
                  illum adipisci unde laborum dolorem vel in. Totam et incidunt
                  itaque.
                </p>
                <Button variant="info" className="p-2">
                  Start Now
                </Button>
              </div>
            </div>
            <div className="w-2/5 ">
              <div className="w-full h-96 rounded-full">
                <img
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <div className="flex h-full justify-center">
          <div className="w-4/5  h-full flex justify-center p-16 ">
            <div className="w-3/5 flex justify-center ">
              <div className="w-4/5  text-left">
                <h1 className="text-4xl">We Have Many Year Experience In Consultant Business.</h1>
                <p className="text-xl mt-4 leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  provident quo aut doloribus temporibus sapiente dolore
                  consectetur qui delectus repudiandae tempora, velit aspernatur
                  a tenetur recusandae dolor quasi laborum eius corporis illo
                  ipsam corrupti. Fuga ullam nesciunt, placeat impedit quaerat
                  mollitia? Voluptatem quas hic atque reiciendis dolor tempore
                  eius possimus, animi delectus, quaerat ipsam. Magnam, illum
                  iure. Doloremque, at dolorem.
                </p>
                <Button variant="info" className="p-2">
                  Know More
                </Button>
              </div>
            </div>
            <div className="w-2/5">
              <div className="w-full h-96">
                <img
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full justify-center">
        <div className="w-3/5 flex  justify-center gap-2  p-2 text-center">
          <div className="w-1/4 flex flex-col ">
            <div className="w-full">
              <i className="fa fa-gears" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-lg">
              <strong>Construct</strong>ion
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <div className="w-full">
              <i class="fa fa-cloud" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-lg">
              <strong>Dummy-</strong>Logo
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <div className="w-full">
              <i class="fa fa-eye" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-lg">
              <strong>Random</strong>Logo
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <div className="w-full">
              <i class="fa fa-wrench" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-lg">
              Random <strong>Brand</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SmallScreen() {
  return (
    <>
      <div className="w-full lg:hidden" id="gradient">
        <div className="flex h-full justify-center">
          <div className="w-4/5 h-full flex flex-col justify-center p-12 gap-4">
            <div className="w-full">
              <div className="w-full h-80 rounded-full">
                <img
                  src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full object-center object-cover rounded-full"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full  text-center">
                <p className=" text-md">Ki Name Bolbo Tomako</p>
                <h2 className="text-3xl leading-normal">
                  We Are Consulting For Your <br />
                  Business Finances
                </h2>
                <p className=" text-lg mt-2 mb-4 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates repellat, alias omnis ut incidunt molestias
                  consequuntur reiciendis ipsa non quam architecto esse quo
                  illum adipisci unde laborum dolorem vel in. Totam et incidunt
                  itaque.
                </p>
                <center>
                <Button variant="info" className="p-2">
                  Start Now
                </Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <div className="flex h-full justify-center">
          <div className="w-4/5  h-full flex flex-col justify-center p-16 gap-5 align-middle">
          <div className="w-full ">
              <div className="w-full h-full ">
              <img
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full  text-center">
                <h2 className="text-3xl leading-normal">We Have Many Year Experience In Consultant Business.</h2>
                <p className="text-lg mt-4 mb-5 leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  provident quo aut doloribus temporibus sapiente dolore
                  consectetur qui delectus repudiandae tempora, velit aspernatur
                  a tenetur recusandae dolor quasi laborum eius corporis illo
                  ipsam corrupti. Fuga ullam nesciunt, placeat impedit quaerat
                  mollitia? Voluptatem quas hic atque reiciendis dolor tempore
                  eius possimus, animi delectus, quaerat ipsam. Magnam, illum
                  iure. Doloremque, at dolorem.
                </p>
                <center>
                <Button variant="info" className="p-2">
                  Know More
                </Button>
                </center>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center lg:hidden">
        <div className="w-3/4 flex flex-wrap gap-4  p-2 text-center justify-center">
          <div className=" flex flex-col ">
            <div className="w-full">
              <i className="fa fa-gears" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-md">
              <strong>Construct</strong>ion
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className="w-full">
              <i class="fa fa-cloud" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-md">
              <strong>Dummy-</strong>Logo
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className="w-full">
              <i class="fa fa-eye" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-md">
              <strong>Random</strong>Logo
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className="w-full">
              <i class="fa fa-wrench" style={{ fontSize: "36px" }}></i>
            </div>
            <div className="w-full mt-1 text-md">
              Random <strong>Brand</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section1() {
  return (
    <>
      <SmallScreen />
      <LargeScreen />
    </>
  );
}

export default Section1;

// rgb(230,243,252)
// rgb(214,247,240)
